from http.client import OK
from inspect import trace
from re import sub
from flask import Flask, request
from flask import json
from flask.json import jsonify
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from models.transaction import Transaction

import budget
import account

# https://flask-jwt-extended.readthedocs.io/en/latest/

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JWT_SECRET_KEY'] = "super-secret"
jwt = JWTManager(app)

@app.route('/login', methods=['POST'])
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

# Start Account Endpoints
@app.route('/getAccount', methods=['POST'])
@jwt_required()
def getAccount():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    return jsonify(account.getAccount(username))

@app.route('/getAmountEarned', methods=['POST'])
@jwt_required()
def getAmountEarned():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    month = payload["month"]
    year = payload["year"]
    return jsonify(account.getAmountEarned(username, month, year))

@app.route('/getTotalSpentByCategory', methods=['POST'])
@jwt_required()
def getTotalSpentByCategory():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    month = payload["month"]
    year = payload["year"]
    return jsonify(account.getTotalSpentByCategory(username, month, year))

@app.route('/getTransactionHistory', methods=['POST'])
@jwt_required()
def getTransactionHistory():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    return jsonify(account.getTransactionHistory(username))

@app.route('/addTransaction', methods=['POST'])
@jwt_required()
def addTransaction():
    payload = request.data
    payload = json.loads(payload)
    transaction = JSONToTransaction(payload)
    return jsonify(account.addTransaction(transaction))

def JSONToTransaction(json):
    transaction = Transaction()
    transaction.id = json['transaction']['id']
    transaction.owner = json['transaction']["owner"]
    transaction.amount = json['transaction']["amount"]
    transaction.archived = json['transaction']["archived"]
    transaction.date = json['transaction']["date"]
    transaction.category = json['transaction']["category"]
    transaction.account = json['transaction']["account"]
    return transaction
@app.route('/deleteTransaction', methods=['DELETE'])
@jwt_required()
def deleteTransaction():
    payload = request.data
    payload = json.loads(payload)
    transaction = JSONToTransaction(payload)
    return jsonify(account.deleteTransaction(transaction))
# End Account Endpoints

# Start Budget Endpoints
@app.route('/getBudgetByCategory', methods=['POST'])
@jwt_required()
def getBudgetByCategory():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    month = payload["month"]
    year = payload["year"]
    return jsonify(budget.getBudgetByCategory(username, month, year))
# End Budget Endpoints

if __name__ == '__main__':
    app.run(host="localhost", port=80)