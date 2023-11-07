from datetime import date
import json
from flask_jwt_extended import get_jwt_identity
from auth import requires_auth
from models.transaction import Transaction
from dao import account_dao
from dao import budget_dao
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

account_blueprint = Blueprint('account', __name__,)

@account_blueprint.route('/account/<id>', methods=['GET'])
@jwt_required()
@requires_auth
def get_account(id):
    return jsonify(account_dao.get_account(id))

@account_blueprint.route('/account/<id>/income/<year>/<month>', methods=['GET'])
@jwt_required()
@requires_auth
def get_amount_earned(id, year, month):
    return jsonify(account_dao.get_amount_earned(id, month, year))

@account_blueprint.route('/account/<id>/balance/<year>/<month>', methods=['GET'])
@jwt_required()
@requires_auth
def get_remaining_balance(id, year, month):
    return jsonify(budget_dao.get_remaining_balance(id, month, year))

@account_blueprint.route('/account/<id>/summary/<year>/<month>', methods=['GET'])
@jwt_required()
@requires_auth
def get_total_spent_by_category(id, year, month):
    return jsonify(account_dao.get_total_spent_by_category(id, month, year))

@account_blueprint.route('/account/<id>/transactions/', methods=['GET'])
@jwt_required()
@requires_auth
def get_transaction_history(id):
    return jsonify(account_dao.get_transaction_history(id))

@account_blueprint.route('/account/<id>/transaction/', methods=['POST'])
@jwt_required()
@requires_auth
def add_transaction(id):
    payload = request.data
    payload = json.loads(payload)
    transaction = JSON_to_transaction(payload)
    return jsonify(account_dao.add_transaction(transaction))

@account_blueprint.route('/account/<id>/transaction/', methods=['DELETE'])
@jwt_required()
@requires_auth
def delete_transaction(id):
      payload = request.data
      payload = json.loads(payload)
      transaction = JSON_to_transaction(payload)
      return jsonify(account_dao.delete_transaction(transaction))

@account_blueprint.route('/account/<id>/archive/', methods=["POST"])
@jwt_required()
@requires_auth
def archive_account(id):
      payload = request.data
      payload = json.loads(payload)
      activeBudgets = budget_dao.get_active_budgets(payload["username"])
      today = date.today()
      account_dao.archive_account(payload["username"], today.strftime("%Y-%m-%d"))
      for budgetItem in activeBudgets:
          transaction = Transaction()
          transaction.owner = budgetItem["owner"]
          transaction.category = budgetItem["category"]
          transaction.date = today.strftime("%Y-%m-%d")
          transaction.amount = budgetItem["amount"]
          budget_dao.add_budget(transaction)
      return jsonify("Account archived.")

def JSON_to_transaction(json):
    transaction = Transaction()
    transaction.id = json['transaction']['id']
    transaction.owner = json['transaction']["owner"]
    transaction.amount = json['transaction']["amount"]
    transaction.archived = json['transaction']["archived"]
    transaction.date = json['transaction']["date"]
    transaction.category = json['transaction']["category"]
    transaction.account = "main"
    return transaction
