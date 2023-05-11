import db

def getUser(username):
    query = "SELECT * FROM users where username=%s"
    result = db.executeQuery(query, (username,))
    if (len(result) > 0):
        return result[0]
    else:
        return {"error" : "User not found."}

def resetPassword(username, password):
    query = "update users set password=%s where username=%s"
    result = db.executeCUD(query, ((password, username,)))
    return result
