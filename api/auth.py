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
    user = userDb.getUser(username)
    user_password = user["password"]
    provided_password = payload["password"]
    valid_login = checkPassword(user_password, provided_password)
    if (provided_password) is not None:
        if (valid_login):
            access_token = create_access_token(identity=user['id'])
            return jsonify(access_token=access_token, username=payload["username"], userId=user["id"])
        else:
             return jsonify({"error": "Bad username or password"})

@auth_blueprint.route('/reset-password', methods=['POST'])
def resetPassword():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    old_password = payload["old_password"]
    new_password = payload["new_password"]
    user = userDb.getUser(username)
    result = {}
    if "error" not in user:
        # Check if submitted password is correct.
        result = checkPassword(user["password"], old_password)
        if (result == False):
            result = {"error" : "Incorrect password."}
        else:
            # Otherwise reset password.
            new_password = new_password.encode('utf-8')
            salt = bcrypt.gensalt(prefix=b"2a")
            hash = bcrypt.hashpw(new_password, salt)
            userDb.resetPassword(username, hash)
            result = {"status" : "success", "message" : "Password reset for " + username }
    return jsonify(result)

def checkPassword(user_password, provided_password):
    """
    user_password : Stored user password.\n
    provided_password - Submitted password to be validated.
    """
    user_password = user_password.encode('utf-8')
    provided_password = provided_password.encode('utf-8')
    result = bcrypt.checkpw(provided_password, user_password)
    return result

