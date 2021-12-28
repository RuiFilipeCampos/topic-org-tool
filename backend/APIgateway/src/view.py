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
        try:
            payload = request.get_json()
            status, jwt_token = cntrl.auth\
                (**payload)
            
            return dict(
                    status = status,
                    jwt = jwt_token,
                    )

        except LoginError:
            return dict(status = 400)

        except KeyError:
            return dict(
                status = 400,
                error = "Invalid JSON."
                )

class Register(Dispatch):
    @classmethod
    def options(cls):
        pass

    @classmethod
    def post(cls):
        try:
            status = cntrl.new_user\
                (**request.get_json())
            return dict(status = status)

        except KeyError:
            return dict(
                status = 400,
                error = "Invalid JSON."
                )

class Routes:
    @app.route("/login", methods = ["POST", "OPTIONS"])
    def login():
        return Login.dispatch()

    @app.route("/register", methods = ["POST", "OPTIONS"])
    def register():
        return Register.dispatch()