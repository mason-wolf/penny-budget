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

def reset_password(passwordResetId, hashed_password):
    user_query = "SELECT accountOwner FROM accounts where passwordResetId=%s"
    user = db.execute_query(user_query, (passwordResetId,))
    query = "update users set password=%s where username=%s"
    result = db.execute_CUD(query, ((hashed_password, user[0]["accountOwner"],)))
    reset_id_query = "update accounts set passwordResetId=null where accountOwner=%s"
    db.execute_CUD(reset_id_query, (user[0]["accountOwner"],))
    return result

