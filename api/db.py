import mysql.connector

def get_connection():
    db = mysql.connector.connect(
        host = "localhost",
        #host = "host.docker.internal",
        user="root",
        password="Nosam419!",
        database="budgetapp"
    )
    return db

def execute_query(query, params):
    try:
      conn = get_connection()
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
    except Exception as e:
        print(e)
        return []

def execute_CUD(query, params):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(query, (params))
    conn.commit()
    cursor.close()
    conn.close()
