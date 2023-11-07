import json
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from dao import user_dao as userDb
import bcrypt

auth_blueprint = Blueprint('auth', __name__,)

@auth_blueprint.route('/login', methods=['POST'])
def login():

    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    try:
      user = userDb.get_user(username)
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
def reset_password():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    old_password = payload["old_password"]
    new_password = payload["new_password"]
    user = userDb.get_user(username)
    result = {}
    if "error" not in user:
        # Check if submitted password is correct.
        result = check_password(user["password"], old_password)
        if (result == False):
            result = {"error" : "Incorrect password."}
        else:
            # Otherwise reset password.
            new_password = new_password.encode('utf-8')
            salt = bcrypt.gensalt(prefix=b"2a")
            hash = bcrypt.hashpw(new_password, salt)
            userDb.reset_password(username, hash)
            result = {"status" : "success", "message" : "Password reset for " + username }
    return jsonify(result)

def check_password(user_password, provided_password):
    """
    user_password : Stored user password.\n
    provided_password - Submitted password to be validated.
    """
    user_password = user_password.encode('utf-8')
    provided_password = provided_password.encode('utf-8')
    result = bcrypt.checkpw(provided_password, user_password)
    return result

