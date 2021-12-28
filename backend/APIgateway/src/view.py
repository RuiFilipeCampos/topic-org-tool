from flask import Flask
from flask import request
from flask import make_response

import controller as cntrl

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
        payload:dict = request.get_json()
        username = payload.get("username", None)
        password = payload.get("password", None)

        if username is None or password is None:
            return dict(
                status=400, 
                msg="[400 Bad Request] Did you provide both `username` and `password`?"
            )        
        jwt = cntrl.auth(username, password)
        if jwt is None:
            return dict(
                status=401, 
                msg="[401 Unauthorized] Login was not successful."
            )

        response = make_response(dict(
            status=200, 
            msg="[200 OK] Logged in!", 
        ))

        response.set_cookie(
            "jwt", 
            value=jwt, 
            httponly=True,
            secure=True
        )


        return response
        

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
            return dict(
                status=400, 
                msg="[400 Bad Request] Did you provide both `username` and `password`?"
            )
        
        if cntrl.new_user(username, password):
            return dict(
                status=201, 
                msg="[Created] A new user has been created."
            )
        
        return dict(
            status=409, 
            msg="[Conflict] Username already exists."
        )

class CM:
    """ Connector to Content Managemer"""
    @classmethod
    def dispatch(cls, table_name):
        if request.method == "GET":
            cls.get(table_name)

    @classmethod
    def get(cls, table_name, user_id):
        import requests
        requests.get("")

class Routes:
    @app.route("/login", methods = ["POST", "OPTIONS"])
    def login():
        return Login.dispatch()

    @app.route("/register", methods = ["POST", "OPTIONS"])
    def register():
        return Register.dispatch()

    #@app.route("/cm/<str:table>")
    def to_content_manager(table):

        data = request.get_json()
        try: jwt = data["jwt"]
        except KeyError:
            return dict(status=400, msg="No token.")

        import jwt
        try:
            payload = jwt.decode()
        except jwt.exceptions.DecodeError:
            return dict(status=400, msg="Invalid token.")
        except jwt.exceptions.InvalidSignatureError:
            return dict(status=400, msg="Bad credentials.")
        except jwt.exceptions.ExpiredSignatureError:
            return dict(status=400, msg="Session has expired.")

        return CM.dispatch(table, payload["user_id"])