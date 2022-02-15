from dao import budget_dao

def getBudgetByCategory(username, month, year):
    return budget_dao.getBudgetByCategory(username, month, year)

def getBudgetCategories(username):
    return budget_dao.getBudgetCategories(username)