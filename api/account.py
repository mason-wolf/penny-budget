from models.transaction import Transaction
from dao import account_dao

def getAccount(username):
    return account_dao.getAccount(username)
    
def getAmountEarned(username, month, year):
    return account_dao.getAmountEarned(username, month, year)

def getTotalSpentByCategory(username, month, year):
    return account_dao.getTotalSpentByCategory(username, month, year)

def getTransactionHistory(username):
    return account_dao.getTransactionHistory(username)

def addTransaction(transaction: Transaction):
    return account_dao.addTransaction(transaction)

def deleteTransaction(transactionId):
    return account_dao.deleteTransaction(transactionId)

def archiveAccount(username, date):
    return account_dao.archiveAccount(username, date)