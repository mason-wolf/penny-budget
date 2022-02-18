from datetime import date
import json

import jwt
from models.transaction import Transaction
from dao import account_dao
from dao import budget_dao
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

account_blueprint = Blueprint('account', __name__,)

@account_blueprint.route('/getAccount', methods=['POST'])
@jwt_required()
def getAccount():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    return jsonify(account_dao.getAccount(username))
    
@account_blueprint.route('/getAmountEarned', methods=['POST'])
@jwt_required()
def getAmountEarned():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    month = payload["month"]
    year = payload["year"]
    return jsonify(account_dao.getAmountEarned(username, month, year))

@account_blueprint.route('/getRemainingBalance', methods=['POST'])
@jwt_required()
def getRemainingBalance():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    month = payload["month"]
    year = payload["year"]
    return jsonify(budget_dao.getRemainingBalance(username, month, year))

@account_blueprint.route('/getTotalSpentByCategory', methods=['POST'])
@jwt_required()
def getTotalSpentByCategory():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    month = payload["month"]
    year = payload["year"]
    return jsonify(account_dao.getTotalSpentByCategory(username, month, year))

@account_blueprint.route('/getTransactionHistory', methods=['POST'])
@jwt_required()
def getTransactionHistory():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    return jsonify(account_dao.getTransactionHistory(username))

@account_blueprint.route('/addTransaction', methods=['POST'])
@jwt_required()
def addTransaction():
    payload = request.data
    payload = json.loads(payload)
    transaction = JSONToTransaction(payload)
    return jsonify(account_dao.addTransaction(transaction))

@account_blueprint.route('/deleteTransaction', methods=['DELETE'])
@jwt_required()
def deleteTransaction():
    payload = request.data
    payload = json.loads(payload)
    transaction = JSONToTransaction(payload)
    return jsonify(account_dao.deleteTransaction(transaction))

def deleteTransaction(transactionId):
    return account_dao.deleteTransaction(transactionId)

@account_blueprint.route('/archiveAccount', methods=["POST"])
@jwt_required()
def archiveAccount():
    payload = request.data
    payload = json.loads(payload)
    activeBudgets = budget_dao.getActiveBudgets(payload["username"])
    today = date.today()
    account_dao.archiveAccount(payload["username"], today.strftime("%Y-%m-%d"))
    for budgetItem in activeBudgets:
        transaction = Transaction()
        transaction.owner = budgetItem["owner"]
        transaction.category = budgetItem["category"]
        transaction.date = today.strftime("%Y-%m-%d")
        transaction.amount = budgetItem["amount"]
        budget_dao.addBudget(transaction)
    return jsonify("Account archived.")

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