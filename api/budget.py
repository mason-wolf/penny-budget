from models.transaction import Transaction
from dao import budget_dao

# Gets all budget items by specified month and year.
def getBudgetByCategory(username, month, year):
    return budget_dao.getBudgetByCategory(username, month, year)

# Gets all budget categories.
def getBudgetCategories(username):
    return budget_dao.getBudgetCategories(username)

# Gets total amount budgeted for this month.
def getTotalBudget(username):
    return budget_dao.getTotalBudget(username)
    
def addCategory(username, title):
    return budget_dao.addCategory(username, title)

def deleteCategory(categoryId):
    return budget_dao.deleteCategory(categoryId)

def getActiveBudgets(username):
    return budget_dao.getActiveBudgets(username)

def addBudget(budget: Transaction):
    return budget_dao.addBudget(budget)

def deleteBudget(budgetId):
    return budget_dao.deleteBudget(budgetId)