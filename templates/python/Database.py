import mysql.connector as db
from mysql.connector import Error

def Connect():
    Database = None
    try:
        Database = db.connect(host="localhost", user="root", password="CoderProf123", database="whatsapp")
    except Error as e:
        Database = e.msg
    return Database

# Read(tableName, "name", "email", condition="id=9") - Read(tableName, "name", "email")
def Read(tableName, *args, condition=None):
    data = Connect()
    try:
        list_data = []
        if data != False:
            Cursor = data.cursor(dictionary=True)
            if condition == None:
                Cursor.execute(f"SELECT * FROM {tableName}")
            else:
                condition = condition.split("=")[0] + f" = '{condition.split('=')[1]}'"
                Cursor.execute(f"SELECT * FROM {tableName} WHERE {condition}")
            records = Cursor.fetchall()
            for row in records:
                List = []
                for r in args:
                    List.append(row[r])
                if condition == None:
                    list_data.append(List)
                else:
                    list_data = List
                    if len(args) == 1:
                        list_data = "".join(list_data)
            return list_data
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# Insert(tableName, "name=myName", "password=myPassword")
def Insert(tableName, **kwargs):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()

            query = f"INSERT INTO {tableName} ( "
            timer = 0
            for ch in kwargs.items():
                timer += 1
                if timer == len(kwargs.values()):
                    query += f"{ch[0]} ) VALUES ( "
                else:
                    query += f"{ch[0]}, "
            timer = 0
            for ch in kwargs.items():
                timer += 1
                if timer == len(kwargs.values()):
                    query += f"'{ch[1]}' )"
                else:
                    query += f"'{ch[1]}', "

            Cursor.execute(query)
            data.commit()
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# Check(tableName, "username=adfh")  return True / False
def Check(tableName, condition):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor(dictionary=True)
            condition = condition.split("=")[0] + f" = '{condition.split('=')[1]}'"
            Cursor.execute(f"SELECT * FROM {tableName} WHERE {condition}")
            records = Cursor.fetchall()
            if records:
                return True
            else:
                return False
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# Update(tableName, condition="id=9", name="secondName") -  Update(tableName, name="Names")
def Update(tableName, condition=None, **kwargs):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            query = ""
            if condition == None:
                query = f"UPDATE {tableName} SET "
                timer = 0
                for ch in kwargs.items():
                    timer += 1
                    if timer == len(kwargs.values()):
                        query += f"{ch[0]} = '{ch[1]}'"
                    else:
                        query += f"{ch[0]} = '{ch[1]}', "
            else:
                condition = condition.split("=")[0] + f" = '{condition.split('=')[1]}'"
                query = f"UPDATE {tableName} SET "
                timer = 0
                for ch in kwargs.items():
                    timer += 1
                    if timer == len(kwargs.values()):
                        query += f"{ch[0]} = '{ch[1]}' WHERE {condition}"
                    else:
                        query += f"{ch[0]} = '{ch[1]}', "

            Cursor.execute(query)
            data.commit()
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# Delete(tableName, condition="id=9") - Delete(tableName)
def Delete(tableName, condition=None):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            query = ""
            if condition == None:
                query = f"DELETE FROM {tableName}"
            else:
                condition = condition.split("=")[0] + f" = '{condition.split('=')[1]}'"
                query = f"DELETE FROM {tableName} WHERE {condition}"
            Cursor.execute(query)
            data.commit()
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# Column(tableName, "col varchar(32)", "add")  - Column(tableName, "col1", "col2", "delete")
def Column(tableName, *args, condition="add"):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            query = ""
            if condition == "add":
                query = f"ALTER TABLE {tableName} "
                for col in args:
                    if col == args[-1]:
                        query += f"ADD COLUMN ( {col} )"
                    else:
                        query += f"ADD COLUMN ( {col} ), "
            elif condition == "delete":
                query = f"ALTER TABLE {tableName} "
                for col in args:
                    if col == args[-1]:
                        query += f"DROP COLUMN {col}"
                    else:
                        query += f"DROP COLUMN {col}, "

            Cursor.execute(query)
            data.commit()
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# Column(tableName, "col varchar(32)", "add")  - Column(tableName, "delete")
def Table(tableName, *args, condition="add"):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            query = ""
            if condition == "add":
                query = f"CREATE TABLE {tableName} ( "
                for col in args:
                    if col == args[-1]:
                        query += f"{col} )"
                    else:
                        query += f"{col}, "
            elif condition == "delete":
                query = f"DROP TABLE {tableName} "
            Cursor.execute(query)
            data.commit()
        else:
            return data.s
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# getLast(tableName, "id")
def getLast(tableName, condition):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            query = f" SELECT MAX( {condition} ) AS MAXIMUM FROM {tableName}"
            Cursor.execute(query)
            record = Cursor.fetchone()
            return record[0]
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

# getFirst(tableName, "id")
def getFirst(tableName, condition):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            query = f" SELECT {condition}  FROM {tableName} LIMIT 1"
            Cursor.execute(query)
            record = Cursor.fetchone()
            return record[0]
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

#Reset("tableName_1", "tableName_2")
def Reset(*args):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            for table in args:
                Delete(table)
                query = f"ALTER TABLE {table} AUTO_INCREMENT = 1"
                Cursor.execute(query)
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()

#Reset_id("tableName")    id = last id in table
def reset_AutoIcrement(tableName, auto_increment):
    data = Connect()
    try:
        if data != False:
            Cursor = data.cursor()
            Auto = int(getLast(tableName, auto_increment)) + 1
            query = f"ALTER TABLE {tableName} AUTO_INCREMENT = {Auto}"
            Cursor.execute(query)
        else:
            return data
    except Error as e:
        print(e.msg[:(e.msg.index(";"))])
    finally:
        data.close()
