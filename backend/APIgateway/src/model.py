

class DB:
    connected = False

    @classmethod
    def connect(cls):
        import sqlite3
        cls.connection = sqlite3.connect(".db")
        cls.cursor = cls.connection.Cursor()
    
    @classmethod   
    def exec(cls, command):
        return cls.cursor.execute(command)

    @classmethod
    def new(cls, username, password):
        pass

    @classmethod
    def get(cls, username):
        
        x = cls.execute(
            f"SELECT * FROM users WHERE username = {username}"
            )
        
        return cls(x.user, x.password, x.id)


class User(DB):
    def __init__(self, id, username, password):
        self.name = username
        self.password = password
        self.id = id

    def __repr__(self):
        return "<User#{self.id} name:{self.name}>"


