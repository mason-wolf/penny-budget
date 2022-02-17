from flask import jsonify
from models.transaction import Transaction
import db 

def addBudget(budget: Transaction):
    query = "insert into budgets (owner, category, archived, startDate, amount) values (%s, %s, %s, %s, %s)"
    print(budget.category)
    db.executeCUD(query, (budget.owner, budget.category, 0, budget.date, budget.amount,))
    return "Budget added."

def deleteBudget(budgetId):
    query = "delete from budgets where id=%s"
    db.executeCUD(query, (budgetId,))
    return "Budget deleted."

def getTotalBudget(username):
    query = "SELECT SUM(amount) AS amount from budgets where owner=%s and archived = 0"
    result = db.executeQuery(query, (username,))
    return result[0]
    
def getBudgetByCategory(username, month, year):
    query = "select * from budgets where owner = %s and archived = 0 and MONTH(startDate) = %s and YEAR(startDate) = %s"
    result = db.executeQuery(query, (username, month, year))
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
