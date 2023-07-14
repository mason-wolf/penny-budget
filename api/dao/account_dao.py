from models.transaction import Transaction
import db
import json
from datetime import date
from dao import user_dao

def addAccount(accountOwner):
    query = "insert into accounts (accountOwner, accountName, accountType, isPrimary, balance, budgetStartDate, budgetEndDate) values (%s, %s, %s, %s, %s, %s, %s)"
    # TODO: Allow user to add custom account names, types and eventually multiple accounts.
    # Create user account.
    db.executeCUD(query, (accountOwner, "main", "checking", 1, 0.0, str(date.today()), None,))

    default_categories = [
    "Auto & Transport",
    "Food & Dining",
    "Entertainment",
    "Internet",
    "Phone",
    "Gas",
    "Insurance",
    "Utilities",
    "Rent",
    "Other",
    "Personal Care"
    ]

    # Create default budget categories.
    query = "insert into budgetcategories (title, owner) values (%s, %s)"
    for category in default_categories:
        db.executeCUD(query, (category, accountOwner,))
    return {"status" : "success", "message" : "Created account for " + accountOwner + "."}

def getAccount(userId):
    user = user_dao.getUserbyId(userId)
    query = "select * from accounts where accountOwner = %s and isPrimary = 1"
    result = db.executeQuery(query, (user["username"],))
    if len(result) == 0:
        return None
    else:
        return result[0]

# If a user signs on in the future and a budget already exists for a
# previous month, archive those transactions and budgets so the user can create a new one.
# Where date is the new budget start date.
def archiveAccount(username, date):

    # Update the account with the new budget start date.
    accountQuery = "update accounts set budgetStartDate = %s where accountOwner = %s"
    db.executeCUD(accountQuery, (date, username,))

    # Archive the budgets from previous months.
    budgetQuery = "update budgets set archived=1 where owner=%s"
    db.executeCUD(budgetQuery, (username,))

    # Archive the transactions from previous months.
    transactionQuery = "update transactions set archived=1 where owner=%s"
    db.executeCUD(transactionQuery, (username,))
    return "Account archived."

def getAmountEarned(userId, month, year):
    user = user_dao.getUserbyId(userId)
    query = "select sum(amount) from transactions where owner= %s and month(date) = %s and year(date) = %s and category='Income'"
    result = db.executeQuery(query, (user["username"], month, year,))
    amount = json.dumps(result[0]["sum(amount)"])
    if amount == 'null':
        amount = 0
    return amount

# Get total spent by category that has not been archived.
# Archived transactions are historic (previous months).
def getTotalSpentByCategory(id, month, year):
    user = user_dao.getUserbyId(id)
    query = "select id, owner, archived, date, category, account, sum(amount) as amount from transactions where owner= %s and archived='0' and category != 'income' and MONTH(date) =%s and YEAR(date) = %s group by category order by category"
    result = db.executeQuery(query, (user["username"], month, year,))
    if result == []:
        result = 0
    return result

def getTransactionHistory(id):
    user = user_dao.getUserbyId(id)
    query = "select * from transactions where owner= %s order by id desc limit 100"
    result = db.executeQuery(query, (user["username"],))
    return result

def addTransaction(transaction: Transaction):
    query = "insert into transactions (owner, date, amount, category, archived) values (%s, %s, %s, %s, %s)"
    # Add to account balance if the transaction is a source of income.
    accountBalance = float(getBalance(transaction.owner))
    if (transaction.category=='Income'):
        updatedBalance = accountBalance + float(transaction.amount)
        # Add to account balance.
        updateBalance(transaction.owner, updatedBalance)
        # Create transaction.
        db.executeCUD(query, (transaction.owner, transaction.date, transaction.amount, transaction.category, transaction.archived,))
    else:
        # Subtract from account balance if the transaction was a deduction.
        updatedBalance = accountBalance - float(transaction.amount)
        updateBalance(transaction.owner, updatedBalance)
        db.executeCUD(query, (transaction.owner, transaction.date, transaction.amount, transaction.category, transaction.archived,))
    return 'Transaction Added'

def deleteTransaction(transaction: Transaction):
    query = "delete from transactions where id=%s"
    # If transaction is a source of income, update the account balance.
    accountBalance = float(getBalance(transaction.owner))
    if (transaction.category=='Income'):
        updatedBalance = accountBalance - float(transaction.amount)
        updateBalance(transaction.owner, updatedBalance)
        db.executeCUD(query, (transaction.id,))
    else:
        updatedBalance = accountBalance + float(transaction.amount)
        updateBalance(transaction.owner, updatedBalance)
        db.executeCUD(query, (transaction.id,))
    return 'Transaction Deleted'

def getBalance(username):
    query = "select balance from accounts where accountOwner=%s and isPrimary=1"
    result = db.executeQuery(query, ((username,)))
    return result[0]["balance"]

def updateBalance(username, balance):
    query = "update accounts set balance=%s where accountOwner=%s and isPrimary=1"
    db.executeCUD(query, ((balance, username,)))
