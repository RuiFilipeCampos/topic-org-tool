from flask import Flask
from flask import request

import controller as cntrl
from .errors import *

app = Flask(__name__)

class Dispatch:
    @classmethod
    def dispatch(cls):
        if request.method == "OPTIONS":
            return cls.options()

        elif request.method == "POST":
            return cls.post()

class Login(Dispatch):
    @classmethod
    def options(cls):
        pass

    @classmethod
    def post(cls):
        pass
 

class Register(Dispatch):
    @classmethod
    def options(cls):
        pass

    @classmethod
    def post(cls) -> dict:
        payload:dict = request.get_json()
        username = payload.get("username", None)
        password = payload.get("password", None)

        if username is None or password is None:
            return dict(status=400, msg="Invalid JSON.")
        
        if cntrl.new_user(username, password):
            return dict(status=200, msg="A-Okay")
        
        return dict(status=400, msg="Something went wrong.")


class Routes:
    @app.route("/login", methods = ["POST", "OPTIONS"])
    def login():
        return Login.dispatch()

    @app.route("/register", methods = ["POST", "OPTIONS"])
    def register():
        return Register.dispatch()