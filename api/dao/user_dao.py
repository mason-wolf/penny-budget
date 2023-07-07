import db

def addUser(username, password):
    query = "insert into users (username, password, enabled, user_token) values (%s, %s, %s, %s)"
    db.executeCUD(query, (username, password, 1, None,))
    return {"status" : "success", "message" : "Created user."}

def getUser(username):
    query = "SELECT * FROM users where username=%s"
    result = db.executeQuery(query, (username,))
    if (len(result) > 0):
        return result[0]
    else:
        return {"error" : "User not found."}

def getUserbyId(userId):
    query = "SELECT * FROM users where id=%s"
    result = db.executeQuery(query, (userId,))
    if (len(result) > 0):
        return result[0]
    else:
        return {"error" : "User not found."}
    
def resetPassword(username, password):
    query = "update users set password=%s where username=%s"
    result = db.executeCUD(query, ((password, username,)))
    return result
