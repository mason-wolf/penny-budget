from flask import jsonify
import db 
import json

def getAccount(username):
    query = "select * from accounts where accountOwner = %s and isPrimary = 1"
    result = db.executeQuery(query, (username,))
    return result[0]

def getAmountEarned(username, month, year):
    query = "select sum(amount) from transactions where owner= %s and month(date) = %s and year(date) = %s and category='Income'"
    result = db.executeQuery(query, (username, month, year,))
    amount = json.dumps(result[0]["sum(amount)"])
    if amount == 'null':
        amount = 0
    return amount

# Get total spent by category that has not been archived.
# Archived transactions are historic (previous months).
def getTotalSpentByCategory(username, month, year):
    query = "select id, owner, archived, date, category, account, sum(amount) as amount from transactions where owner= %s and archived='1' and category != 'income' and MONTH(date) =%s and YEAR(date) = %s group by category order by category"
    result = db.executeQuery(query, (username, month, year,))
    if result == []:
        result = 0
    return result

def getTransactionHistory(username):
    query = "select * from transactions where owner= %s order by id desc limit 100"
    result = db.executeQuery(query, (username,))
    return result