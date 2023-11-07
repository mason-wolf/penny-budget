import db

def add_user(username, password):
    query = "insert into users (username, password, enabled, user_token) values (%s, %s, %s, %s)"
    db.execute_CUD(query, (username, password, 1, None,))
    return {"status" : "success", "message" : "Created user."}

def get_user(username):
    query = "SELECT * FROM users where username=%s"
    result = db.execute_query(query, (username,))
    if (len(result) > 0):
        return result[0]
    else:
        return {"error" : "User not found."}

def get_user_by_id(userId):
    query = "SELECT * FROM users where id=%s"
    result = db.execute_query(query, (userId,))
    if (len(result) > 0):
        return result[0]
    else:
        return {"error" : "User not found."}

def reset_password(username, password):
    query = "update users set password=%s where username=%s"
    result = db.execute_CUD(query, ((password, username,)))
    return result
