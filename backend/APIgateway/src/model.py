
class User:
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

        entries = cls.execute(
            f"SELECT * FROM users WHERE username = {username}"
        )

        number_of_entries = len(entries)

        if number_of_entries == 0:
            return dict(status = None)
        
        if number_of_entries == 1:
            return dict(
                username = x.user, 
                password = x.password, 
                id = x.id,
                status = 1,
            )

        raise RuntimeError("Two users have the same username!")



