import json
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token

auth_blueprint = Blueprint('auth', __name__,)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    payload = request.data
    payload = json.loads(payload)
    password = payload["password"]
    if (password) is not None:
        if (password == 'test'):
            access_token = create_access_token(identity=payload["username"])
            return jsonify(access_token=access_token, username=payload["username"])
        else:
             return jsonify({"Error": "Bad username or password"}), 401