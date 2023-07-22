import datetime
import json
from flask import jsonify
from models.transaction import Transaction
import db
from dao import user_dao

def addBudget(budget: Transaction):
    query = "insert into budgets (owner, category, archived, startDate, amount) values (%s, %s, %s, %s, %s)"
    db.executeCUD(query, (budget.owner, budget.category, 0, budget.date, budget.amount,))
    return "Budget added."

def deleteBudget(budgetId):
    query = "delete from budgets where id=%s"
    db.executeCUD(query, (budgetId,))
    return "Budget deleted."

# Gets all budgets by month and year.
def getBudgetHistory(username):
    query = """
        SELECT DISTINCT MONTH(startDate), YEAR(startDate) FROM budgets WHERE archived=1 AND owner=%s
        ORDER BY startDate DESC
        """
    result = db.executeQuery(query, (username,))
    history = []
    for item in result:
        history.append({"month" : item["MONTH(startDate)"], "year": item["YEAR(startDate)"]})
    return history

# Gets all budget items and amount spent per category
# for a selected month and year.
def getBudgetArchive(username, month, year):
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

    archive = db.executeQuery(archiveQuery, (username, month, year, username, month, year,))
    notBudgeted = db.executeQuery(nonBudgetItems, (username, month, year, username, username, month, year,))
    for item in notBudgeted:
        archive.append(item)
    return archive

def getRemainingBalance(userId, month, year):
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
    user = user_dao.getUserbyId(userId)
    date = datetime.datetime(year, month, 1).date()
    result = db.executeQuery(query, (user["username"], date, user["username"], date,))
    return result[0]["BALANCE"]

def getTotalBudget(username):
    query = "SELECT SUM(amount) AS amount from budgets where owner=%s and archived = 0"
    result = db.executeQuery(query, (username,))
    return result[0]

def getBudgetByCategory(userId, year, month):
    user = user_dao.getUserbyId(userId)
    query = "select * from budgets where owner = %s and archived = 0 and MONTH(startDate) = %s and YEAR(startDate) = %s order by amount desc"
    result = db.executeQuery(query, (user["username"], month, year,))
    return result

def getBudgetCategories(username):
    query = "select * from budgetCategories where owner=%s order by title"
    result = db.executeQuery(query, (username,))
    return result

def getActiveBudgets(username):
    query = "select * from budgets where owner=%s and archived = 0"
    result = db.executeQuery(query, (username,))
    return result

def addCategory(username, title):
    query = "insert into budgetCategories (owner, title) values (%s, %s)"
    db.executeCUD(query, (username, title))
    return "Category added."

def deleteCategory(categoryId):
    query = "delete from budgetCategories where id= %s"
    db.executeCUD(query, (categoryId,))
    return "Category deleted."
