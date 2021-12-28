import sqlite3
from settings import MODULE_PATH

db_file_path = str(MODULE_PATH/".db")

class User:
    @classmethod   
    def exec(cls, command):
        connection = sqlite3.connect(db_file_path)
        cursor = connection.cursor()
        
        cursor.execute(command)
        result = cursor.fetchall()
        
        connection.commit()
        connection.close()
        return result

    @classmethod
    def new(cls, username, password):
        cls.exec(f"""
        INSERT INTO users
            (username, password)
        VALUES
            ('{username}', '{password}');
        """)

    @classmethod
    def get(cls, username):
        entries = cls.exec(f"""
            SELECT 
                * 
            FROM 
                users 
            WHERE 
                username = '{username}'
        """)
    
        number_of_entries = len(entries)

        if number_of_entries == 0:
            return dict(status = None)

        if number_of_entries == 1:
            entry = entries[0]
            return dict(
                id = entry[0],
                username = entry[1], 
                password = entry[2], 
                status = 1,
            )

        raise RuntimeError("Two users have the same username!")



