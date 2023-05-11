import bcrypt
from dao import user_dao
from dao import account_dao
from flask import Blueprint, jsonify, request
import json

user_blueprint = Blueprint('user', __name__,)

def getUser(username):
    return user_dao.getUser(username)

@user_blueprint.route('/users', methods=['POST'])
def createUser():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    password = payload["password"]
    user = user_dao.getUser(username)
    result = {}
    if "error" in user:
        # Only create user if user doesn't exist.
        password = password.encode('utf-8')
        salt = bcrypt.gensalt(prefix=b"2a")
        hash = bcrypt.hashpw(password, salt)
        # Create user.
        user_dao.addUser(username, hash)
        # Create account for user.
        account_dao.addAccount(username)
        result = {"success" : "User created."}
    else:
        result = {"error" : "User already exists."}
    return jsonify(result)
