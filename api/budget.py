from datetime import date
import json
from flask import Blueprint, jsonify, request
from models.transaction import Transaction
from dao import budget_dao
from flask_jwt_extended import jwt_required

budget_blueprint = Blueprint('budget', __name__,)

# Gets all budget items by specified month and year.
@budget_blueprint.route('/getBudgetByCategory', methods=['POST'])
@jwt_required()
def getBudgetByCategory():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    month = payload["month"]
    year = payload["year"]
    return jsonify(budget_dao.getBudgetByCategory(username, month, year))

# Gets all budget categories.
@budget_blueprint.route('/getBudgetCategories', methods=["POST"])
@jwt_required()
def getBudgetCategories():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    return jsonify(budget_dao.getBudgetCategories(username))

# Gets total amount budgeted for this month.
@budget_blueprint.route('/getTotalBudget', methods=["POST"])
@jwt_required()
def getTotalBudget():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.getTotalBudget(payload["username"]))

# Gets all budget history by month and year.
@budget_blueprint.route('/getBudgetHistory', methods=["POST"])
@jwt_required()
def getBudgetHistory():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.getBudgetHistory(payload["username"]))

## Gets all budget items and amount spent per category
# for a selected month and year.
@budget_blueprint.route('/getBudgetArchive', methods=['POST'])
@jwt_required()
def getBudgetArchive():
    payload = request.data
    payload = json.loads(payload)
    return jsonify (budget_dao.getBudgetArchive(payload["username"], payload["month"], payload["year"]))

@budget_blueprint.route('/addCategory', methods=["POST"])
@jwt_required()
def addCategory():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    title = payload["title"]
    return jsonify(budget_dao.addCategory(username, title))

@budget_blueprint.route('/deleteCategory', methods=["DELETE"])
@jwt_required()
def deleteCategory():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.deleteCategory(payload["categoryId"]))

def getActiveBudgets(username):
    return budget_dao.getActiveBudgets(username)

@budget_blueprint.route('/addBudget', methods=["POST"])
@jwt_required()
def addBudget():
    payload = request.data
    payload = json.loads(payload)
    today = date.today()
    transaction = Transaction()
    transaction.owner = payload["budgetItem"]["owner"]
    transaction.category = payload["budgetItem"]["category"]["title"]
    transaction.date = today.strftime("%Y-%m-%d")
    transaction.amount = payload["budgetItem"]["amount"]
    budget_dao.addBudget(transaction)
    return jsonify("Budget added.")

@budget_blueprint.route('/deleteBudget', methods=["DELETE"])
@jwt_required()
def deleteBudget():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.deleteBudget(payload["budgetId"]))