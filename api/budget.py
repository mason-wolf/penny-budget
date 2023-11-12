from datetime import date
import json
from flask import Blueprint, jsonify, request
from models.transaction import Transaction
from dao import budget_dao
from flask_jwt_extended import jwt_required, get_jwt_identity
from auth import requires_auth

budget_blueprint = Blueprint('budget', __name__,)

# Gets all budget items by specified month and year.
@budget_blueprint.route('/budget/<id>/<year>/<month>', methods=['GET'])
@jwt_required()
@requires_auth
def get_budget_by_category(id, year, month):
    return jsonify(budget_dao.get_budget_by_category(id, year, month))

# Gets all budget categories.
@budget_blueprint.route('/budget/<id>/categories', methods=["GET"])
@jwt_required()
@requires_auth
def get_budget_categories(id):
    return jsonify(budget_dao.get_budget_categories(id))

# Gets total amount budgeted for this month.
@budget_blueprint.route('/budget/<id>/totals', methods=["GET"])
@jwt_required()
@requires_auth
def get_total_budget(id):
    return jsonify(budget_dao.get_total_budget(id))

# Gets all budget history by month and year.
@budget_blueprint.route('/budget/<id>/history', methods=["GET"])
@jwt_required()
@requires_auth
def get_budget_history(id):
    return jsonify(budget_dao.get_budget_history(id))

## Gets all budget items and amount spent per category
# for a selected month and year.
@budget_blueprint.route('/budget/<id>/archive/<year>/<month>', methods=['GET'])
@jwt_required()
@requires_auth
def get_budget_archive(id, year, month):
    return jsonify (budget_dao.get_budget_archive(id, month, year))

@budget_blueprint.route('/category/<id>', methods=["POST"])
@jwt_required()
@requires_auth
def add_category(id):
    payload = request.data
    payload = json.loads(payload)
    title = payload["title"]
    return jsonify(budget_dao.add_category(id, title))

@budget_blueprint.route('/category/<id>', methods=["DELETE"])
@jwt_required()
@requires_auth
def delete_category(id):
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.delete_category(id, payload["categoryId"]))

def get_active_budgets(username):
    return budget_dao.get_active_budgets(username)

@budget_blueprint.route('/budget/<id>', methods=["POST"])
@jwt_required()
@requires_auth
def add_budget(id):
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

@budget_blueprint.route('/budget/<id>', methods=['PUT'])
@jwt_required()
@requires_auth
def update_budget_item(id):
    payload = request.data
    payload = json.loads(payload)
    budget_id = payload["budget_id"]
    budget_amount = payload["budget_amount"]
    return jsonify(budget_dao.update_budget_item(budget_id, budget_amount))

@budget_blueprint.route('/budget/<id>', methods=["DELETE"])
@jwt_required()
@requires_auth
def delete_budget(id):
    payload = request.data
    payload = json.loads(payload)
    return jsonify(budget_dao.delete_budget(id, payload["budgetId"]))
