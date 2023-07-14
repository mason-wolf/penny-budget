from datetime import date
import json
from flask_jwt_extended import get_jwt_identity
from models.transaction import Transaction
from dao import account_dao
from dao import budget_dao
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

account_blueprint = Blueprint('account', __name__,)

@account_blueprint.route('/account/<id>', methods=['GET'])
@jwt_required()
def getAccount(id):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401 : "Unauthorized."})
    else:
        return jsonify(account_dao.getAccount(id))

@account_blueprint.route('/account/<id>/income/<year>/<month>', methods=['GET'])
@jwt_required()
def getAmountEarned(id, year, month):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401 : "Unauthorized."})
    else:
        return jsonify(account_dao.getAmountEarned(id, month, year))

@account_blueprint.route('/account/<id>/balance/<year>/<month>', methods=['GET'])
@jwt_required()
def getRemainingBalance(id, year, month):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401 : "Unauthorized."})
    else:
        return jsonify(budget_dao.getRemainingBalance(id, month, year))

@account_blueprint.route('/account/<id>/summary/<year>/<month>', methods=['GET'])
@jwt_required()
def getTotalSpentByCategory(id, year, month):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401: "Unauthorized."})
    else:
        return jsonify(account_dao.getTotalSpentByCategory(id, month, year))

@account_blueprint.route('/account/<id>/transactions/', methods=['GET'])
@jwt_required()
def getTransactionHistory(id):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401 : "Unauthorized."})
    else:
        return jsonify(account_dao.getTransactionHistory(id))

@account_blueprint.route('/account/<id>/transaction/', methods=['POST'])
@jwt_required()
def addTransaction(id):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401: "Unauthorized."})
    else:
      payload = request.data
      payload = json.loads(payload)
      transaction = JSONToTransaction(payload)
      return jsonify(account_dao.addTransaction(transaction))

@account_blueprint.route('/account/<id>/transaction/', methods=['DELETE'])
@jwt_required()
def deleteTransaction(id):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401: "Unauthorized."})
    else:
      payload = request.data
      payload = json.loads(payload)
      transaction = JSONToTransaction(payload)
      return jsonify(account_dao.deleteTransaction(transaction))
    
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
    transaction.account = "main"
    return transaction
