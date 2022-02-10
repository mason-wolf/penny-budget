import db 

def getUser(username):
    query = "SELECT * FROM users where username=%s"
    result = db.executeQuery(query, (username,))
    return result