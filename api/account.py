from dao import account_dao

def getAccount(username):
    return account_dao.getAccount(username)
    
def getAmountEarned(username, month, year):
    return account_dao.getAmountEarned(username, month, year)

def getTotalSpentByCategory(username, month, year):
    return account_dao.getTotalSpentByCategory(username, month, year)

def getTransactionHistory(username):
    return account_dao.getTransactionHistory(username)
