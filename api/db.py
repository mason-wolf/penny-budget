import mysql.connector

def getConnection():
    db = mysql.connector.connect(
        host = "localhost",
        user="root",
        password="Nosam419!",
        database="budgetapp"
    )
    return db

def executeQuery(query, params):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(query, params)
    columns = cursor.description
    result = []
    for value in cursor.fetchall():
        tmp = {}
        for (index,column) in enumerate(value):
            tmp[columns[index][0]] = column
        result.append(tmp)
    cursor.close()
    conn.close()
    return result