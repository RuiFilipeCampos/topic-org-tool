from settings import PRIVATE_KEY, SERVER_KEY, JWT_KEY
import model
import jwt

from cryptography.fernet import Fernet

def server_encrypt(key, raw_password):
    fernet = Fernet(key)
    return fernet.encrypt(raw_password.encode())

def server_decrypt(key, encrypted_pass):
    fernet = Fernet(key)
    return fernet.decrypt(encrypted_pass).decode()

def ssh_decrypt(key, encrypted_password):
    return encrypted_password

def auth(username, password):
    user_data = model.User.get(username)
    if user_data["status"] is None:
        del user_data
        return None

    pass_from_db = server_decrypt(
        SERVER_KEY, 
        user_data["password"]
    )

    if pass_from_db == password:
        return jwt.encode(
            dict(user_id=user_data["id"]),
            JWT_KEY,
            algorithm="HS256"
        )

    del user_data 
    return None


def new_user(username, password) -> bool:
    user_data = model.User.get(username)
    if user_data["status"] is not None:
        del user_data
        return False
    
    model.User.new(
        username,
        server_encrypt(
            SERVER_KEY,
            ssh_decrypt(PRIVATE_KEY, password)
        )
    )
    return True