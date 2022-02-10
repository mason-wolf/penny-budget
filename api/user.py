from dao import user_dao

def getUser(username):
    return user_dao.getUser(username)
