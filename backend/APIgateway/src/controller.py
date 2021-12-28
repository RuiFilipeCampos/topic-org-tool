from APIgateway.src.settings import PRIVATE_KEY, SERVER_KEY
from errors import *
import model

def auth(username = "", password = ""):
    if username == "" or password == "":
        raise LoginError

    __password = server_encrypt(SERVER_KEY,
        ssh_decrypt(PRIVATE_KEY, password))
    
    if model.User.get(username).password == __password:
        generate_jwt()

    return 200, None

def new_user(username, password):
    try:
        model.User.get(username)
        return 400

    except UserDoesNotExist:
        model.User.exec("")

    return 200


        
        