from APIgateway.src.settings import PRIVATE_KEY, SERVER_KEY
from errors import *


def auth(username = "", password = ""):
    if username == "" or password == "":
        raise LoginError

    __password = server_encrypt(SERVER_KEY,
        ssh_decrypt(PRIVATE_KEY, password))
    
    if get(user)["password"] == __password:
        generate_jwt()

    return 200, None

def new_user(username, password):
    return 200


        
        