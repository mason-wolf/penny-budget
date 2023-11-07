from datetime import date
import json
from flask import Blueprint, jsonify, request
from models.transaction import Transaction
from dao import budget_dao
from flask_jwt_extended import jwt_required, get_jwt_identity
budget_blueprint = Blueprint('budget', __name__,)

# Gets all budget items by specified month and year.
@budget_blueprint.route('/budget/<id>/<year>/<month>', methods=['GET'])
@jwt_required()
def get_budget_by_category(id, year, month):
    user_id = get_jwt_identity()
    if int(id) != int(user_id):
        return jsonify({401 : "Unauthorized."})
    else:
      return jsonify(budget_dao.get_budget_by_category(id, year, month))

# Gets all budget categories.
@budget_blueprint.route('/getBudgetCategories', methods=["POST"])
@jwt_required()
def get_budget_categories():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    return jsonify(budget_dao.get_budget_categories(username))

# Gets total amount budgeted for this month.
@budget_blueprint.route('/getTotalBudget', methods=["POST"])
@jwt_required()
def get_total_budget():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.get_total_budget(payload["username"]))

# Gets all budget history by month and year.
@budget_blueprint.route('/getBudgetHistory', methods=["POST"])
@jwt_required()
def get_budget_history():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.get_budget_history(payload["username"]))

## Gets all budget items and amount spent per category
# for a selected month and year.
@budget_blueprint.route('/getBudgetArchive', methods=['POST'])
@jwt_required()
def get_budget_archive():
    payload = request.data
    payload = json.loads(payload)
    return jsonify (budget_dao.get_budget_archive(payload["username"], payload["month"], payload["year"]))

@budget_blueprint.route('/addCategory', methods=["POST"])
@jwt_required()
def add_category():
    payload = request.data
    payload = json.loads(payload)
    username = payload["username"]
    title = payload["title"]
    return jsonify(budget_dao.add_category(username, title))

@budget_blueprint.route('/deleteCategory', methods=["DELETE"])
@jwt_required()
def delete_category():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.delete_category(payload["categoryId"]))

def get_active_budgets(username):
    return budget_dao.get_active_budgets(username)

@budget_blueprint.route('/addBudget', methods=["POST"])
@jwt_required()
def add_budget():
    payload = request.data
    payload = json.loads(payload)
    today = date.today()
    transaction = Transaction()
    transaction.owner = payload["budgetItem"]["owner"]
    transaction.category = payload["budgetItem"]["category"]["title"]
    transaction.date = today.strftime("%Y-%m-%d")
    transaction.amount = payload["budgetItem"]["amount"]
    budget_dao.add_budget(transaction)
    return jsonify("Budget added.")

@budget_blueprint.route('/deleteBudget', methods=["DELETE"])
@jwt_required()
def delete_budget():
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.delete_budget(payload["budgetId"]))
