import bcrypt
from dao import user_dao
from dao import account_dao
from flask import Blueprint, jsonify, request
import json

user_blueprint = Blueprint('user', __name__,)

def get_user(username):
    return user_dao.get_user(username)

@user_blueprint.route('/users', methods=['POST'])
def create_user():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    password = payload["password"]
    user = user_dao.get_user(username)
    result = {}
    try:
        # Only create user if user doesn't exist.
        password = password.encode('utf-8')
        salt = bcrypt.gensalt(prefix=b"2a")
        hash = bcrypt.hashpw(password, salt)
        # Create user.
        user_dao.add_user(username, hash)
        # Create account for user.
        account_dao.add_account(username)
        result = {"success" : "User created."}
    except Exception:
                result = {"error" : "User already exists."}
    return jsonify(result)
