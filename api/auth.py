from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.message import EmailMessage
from functools import wraps
import json
import smtplib
import ssl
from flask import Blueprint, jsonify, request, abort
from flask_jwt_extended import create_access_token
from dao import user_dao as user_dao
from dao import account_dao as account_dao
import bcrypt
from flask_jwt_extended import get_jwt_identity
import uuid

auth_blueprint = Blueprint('auth', __name__,)

@auth_blueprint.route('/login', methods=['POST'])
def login():

    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    try:
      user = user_dao.get_user(username)
      user_password = user["password"]
      provided_password = payload["password"]
    except Exception as e:
        return jsonify({"error" : "Something went wrong"})
    valid_login = check_password(user_password, provided_password)
    if (provided_password) is not None:
        if (valid_login):
            access_token = create_access_token(identity=user['id'])
            return jsonify(access_token=access_token, username=payload["username"], userId=user["id"])
        else:
             return jsonify({"error": "Bad username or password"})

@auth_blueprint.route('/reset-password', methods=['POST'])
def reset_password_request():
    payload = request.data
    payload = json.loads(payload)
    email = payload["email"]
    user = user_dao.get_user(email)
    result = {}
    if "error" not in user:
        reset_link = uuid.uuid4()
        set_password_reset_id(email, reset_link.hex)
    return jsonify(result)

@auth_blueprint.route('/reset-password-validated', methods=['POST'])
def reset_password():
    payload = request.data
    payload = json.loads(payload)
    password_reset_id = payload["password_reset_id"]
    new_password = payload["new_password"]
    new_password = new_password.encode('utf-8')
    salt = bcrypt.gensalt(prefix=b"2a")
    hash = bcrypt.hashpw(new_password, salt)
    result= user_dao.reset_password(password_reset_id, hash)
    return jsonify(result)

@auth_blueprint.route('/reset-password/<password_reset_id>', methods=['GET'])
def reset_password_with_reset_id(password_reset_id):
    return validate_password_reset_id(password_reset_id)

def check_password(user_password, provided_password):
    """
    user_password : Stored user password.\n
    provided_password - Submitted password to be validated.
    """
    user_password = user_password.encode('utf-8')
    provided_password = provided_password.encode('utf-8')
    result = bcrypt.checkpw(provided_password, user_password)
    return result

def set_password_reset_id(username, password_reset_id):
    """
    Assigns a temporary password reset ID.\n
    If valid, allows user to reset password.\n
    :params: username
    :password_reset_id: GUID Generated from password reset request
    """
    result = account_dao.set_password_reset_id(username, password_reset_id)
    return jsonify(result)

def validate_password_reset_id(password_reset_id):
    """
    Checks to see if a password reset id is valid.\n
    If valid, allows user to reset password.\n
    :params: password_reset_id
    """
    result = account_dao.validate_password_reset_id(password_reset_id)
    return jsonify(result)

def requires_auth(f):
    """
    If a user is authenticated, check if they're
    authorized to access this endpoint.
    """
    @wraps(f)
    def decorated(*args, **kwargs):
        # Does the requested id match their identity?
        user_id = get_jwt_identity()
        if (int(user_id) != int(kwargs["id"])):
          # Unauthorized
          abort(401)
        return f(*args, **kwargs)
    return decorated

def send_password_reset_link(recipient, reset_link):
    """
    Sends password reset link.\n
    :params: recipient - Recipient's Email
    :params: reset_link - Unique GUUID for request
    """
    message = MIMEMultipart("alternative")
    message["Subject"] = "DoggyDime - Password Reset"
    message["From"] = "support@doggydime.com"
    message["To"] = recipient

    html = """\
    <html>
      <body>
      Click <a href="www.doggydime.com/reset-password/""" + str(reset_link) + """">here</a> to reset your password.
      </body>
    </html>
    """

    part2 = MIMEText(html, 'html')

    message.attach(part2)

    with smtplib.SMTP("smtp.office365.com", 587) as server:
        server.starttls()
        server.ehlo()
        server.login("support@doggydime.com", "")
        server.sendmail(
            "support@doggydime.com", recipient, message.as_string()
        )


