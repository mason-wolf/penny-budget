from flask import jsonify
import db 

def getBudgetByCategory(username, month, year):
    query = "select * from budgets where owner = %s and archived = 1 and MONTH(startDate) = %s and YEAR(startDate) = %s group by category"
    result = db.executeQuery(query, (username, month, year))
    return result

