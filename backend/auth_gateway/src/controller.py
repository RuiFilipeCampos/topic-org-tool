# Internal Imports
from settings import PRIVATE_KEY
from settings import SERVER_KEY
from settings import JWT_KEY
import model

# External Imports
import jwt
from cryptography.fernet import Fernet

# Encryption utilities 
def server_encrypt(key, raw_password):
    fernet = Fernet(key)
    return fernet.encrypt(raw_password.encode())

def server_decrypt(key, encrypted_pass):
    fernet = Fernet(key)
    return fernet.decrypt(encrypted_pass).decode()

def ssh_decrypt(key, encrypted_password):
    return encrypted_password


# The controllers
def auth(username:str, password:str):
    """ Authenticate the user. 
    Returns a JWT on success and None on failure.
    """
    user_data:dict = model.User.get(username)

    if user_data["status"] is None:
        del user_data
        return None

    pass_from_db:str = server_decrypt(
        SERVER_KEY, 
        user_data["password"]
    )

    if pass_from_db == password:
        return jwt.encode(
            dict(user_id=user_data["id"]),
            JWT_KEY,
            algorithm="HS256"
        )

    return None

def new_user(username, password) -> bool:
    """ Create a new user. """

    user_data:dict = model.User.get(username)

    if user_data["status"] is not None:
        return False
    
    model.User.new(
        username,
        server_encrypt(
            SERVER_KEY,
            ssh_decrypt(PRIVATE_KEY, password)
        )
    )
    
    return True