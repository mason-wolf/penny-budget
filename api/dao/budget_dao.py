import datetime
import json
from flask import jsonify
from models.transaction import Transaction
import db
from dao import user_dao

def add_budget(budget: Transaction):
    query = "insert into budgets (owner, category, archived, startDate, amount) values (%s, %s, %s, %s, %s)"
    db.execute_CUD(query, (budget.owner, budget.category, 0, budget.date, budget.amount,))
    return "Budget added."

def delete_budget(userId, budgetId):
    user = user_dao.get_user_by_id(userId)
    query = "delete from budgets where id=%s and owner=%s"
    db.execute_CUD(query, (budgetId, user["username"],))
    return "Budget deleted."

# Gets all budgets by month and year.
def get_budget_history(userId):
    user = user_dao.get_user_by_id(userId)
    query = """
        SELECT DISTINCT MONTH(startDate), YEAR(startDate) FROM budgets WHERE archived=1 AND owner=%s
        ORDER BY startDate DESC
        """
    result = db.execute_query(query, (user["username"],))
    history = []
    for item in result:
        history.append({"month" : item["MONTH(startDate)"], "year": item["YEAR(startDate)"]})
    return history

# Gets all budget items and amount spent per category
# for a selected month and year.
def get_budget_archive(userId, month, year):
    user = user_dao.get_user_by_id(userId)
    archiveQuery = """
        select budgets.id as id, budgets.category,
        sum(case when transactions.owner = %s and MONTH(transactions.date) = %s and YEAR(transactions.date) = %s
        THEN transactions.amount else 0 END) as budgetSpent, budgets.amount as budgetAmount
        from budgets left join transactions on budgets.category = transactions.category
        where budgets.owner = %s and MONTH(budgets.startDate) = %s and YEAR(budgets.startDate) = %s
        group by budgets.category order by budgetSpent desc
        """

    # Query for items that were spent in the timeframe but weren't in the budget.
    nonBudgetItems = """
        SELECT id, category, sum(case when archived = 1 and owner=%s then amount else 0 END) as budgetSpent, 0 as budgetAmount
		FROM transactions WHERE category NOT IN (SELECT category FROM budgets where month(budgets.startDate) = %s and year(budgets.startDate) = %s and owner = %s)
		AND owner = %s and month(transactions.date) = %s and year(transactions.date) = %s and category != 'Income' group by category
        """

    archive = db.execute_query(archiveQuery, (user["username"], month, year, user["username"], month, year,))
    notBudgeted = db.execute_query(nonBudgetItems, (user["username"], month, year, user["username"], user["username"], month, year,))
    for item in notBudgeted:
        archive.append(item)
    return archive

def get_remaining_balance(userId, month, year):
    month = int(month)
    year = int(year)
    query = """
        SELECT (income.earned - spent.spent) as BALANCE FROM
        (SELECT SUM(amount) as earned FROM transactions WHERE owner=%s
        AND category = 'Income' and date < %s) income
        CROSS JOIN
        (SELECT SUM(amount) as spent FROM transactions WHERE owner=%s
        AND category != 'Income' and date < %s) spent
        """
    if (month == 12):
        month = 1
        year = year + 1
    else:
        month = month + 1
    user = user_dao.get_user_by_id(userId)
    date = datetime.datetime(year, month, 1).date()
    result = db.execute_query(query, (user["username"], date, user["username"], date,))
    return result[0]["BALANCE"]

def get_total_budget(userId):
    user = user_dao.get_user_by_id(userId)
    query = "SELECT SUM(amount) AS amount from budgets where owner=%s and archived = 0"
    result = db.execute_query(query, (user["username"],))
    return result[0]

def get_budget_by_category(userId, year, month):
    user = user_dao.get_user_by_id(userId)
    query = "select * from budgets where owner = %s and archived = 0 and MONTH(startDate) = %s and YEAR(startDate) = %s order by amount desc"
    result = db.execute_query(query, (user["username"], month, year,))
    return result

def get_budget_categories(userId):
    user = user_dao.get_user_by_id(userId)
    query = "select * from budgetCategories where owner=%s order by title"
    result = db.execute_query(query, (user["username"],))
    return result

def get_active_budgets(username):
    query = "select * from budgets where owner=%s and archived = 0"
    result = db.execute_query(query, (username,))
    return result

def add_category(userId, title):
    user = user_dao.get_user_by_id(userId)
    query = "insert into budgetCategories (owner, title) values (%s, %s)"
    db.execute_CUD(query, (user["username"], title))
    return "Category added."

def delete_category(userId, categoryId):
    user = user_dao.get_user_by_id(userId)
    query = "delete from budgetCategories where id= %s and owner=%s"
    db.execute_CUD(query, (categoryId, user["username"],))
    return "Category deleted."
