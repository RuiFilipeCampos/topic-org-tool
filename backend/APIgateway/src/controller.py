from settings import PRIVATE_KEY, SERVER_KEY
from errors import *
import model

def server_encrypt(key, password):
    return password

def ssh_decrypt(key, password):
    return password

def generate_jwt():
    return None

def auth(username = "", password = ""):
    if username == "" or password == "":
        raise LoginError

    __password = server_encrypt(
        SERVER_KEY,
        ssh_decrypt(PRIVATE_KEY, password)
    )
    
    if model.User.get(username).password == __password:
        return 200, generate_jwt()

    return 200, None


def new_user(username, password) -> bool:
    user_data = model.User.get(username)
    if user_data["status"] is not None:
        return False

    print(user_data)
    
    model.User.new(
        username,
        server_encrypt(
            SERVER_KEY,
            ssh_decrypt(PRIVATE_KEY, password)
        )
    )

    return True