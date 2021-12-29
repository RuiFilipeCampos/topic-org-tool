from requests.api import head
from flask import Flask
from flask import request
from flask import make_response
import requests
import controller as cntrl
import jwt
from settings import JWT_KEY

app = Flask(__name__)

class Routes:
    @app.route("/auth/login", methods=["POST", "OPTIONS"])
    def login_router():
        return Login.dispatch()

    @app.route("/auth/register", methods=["POST", "OPTIONS"])
    def register_router():
        return Register.dispatch()

    @app.route("/cm/sections", methods=Sections.valid_methods)
    def all_sections():
        return Sections.dispatch()

    @app.route("/cm/sections/<int:section_id>", methods=Section.valid_methods)
    def specific_section(section_id):
        return Section.dispatch(section_id)

class CM:
    """ Connector to Content Managemer """
    from settings import STRAPI_TOKEN
    from settings import CM_PATH

    path = CM_PATH
    token = STRAPI_TOKEN
    headers = dict(
        Authorization = f"bearer {token}"
    )


class DispatchLogic:
    class Auth:
        @classmethod
        def dispatch(cls):
            if request.method == "OPTIONS":
                return cls.options()

            elif request.method == "POST":
                return cls.post()
    
    class ContentManager:
        @classmethod
        def dispatch(cls, *args, **kwargs):
            jwt_token = request.cookies.get("jwt")
            
            try:
                user_id:int = jwt.decode(
                    jwt_token.encode(),
                    JWT_KEY,
                    algorithms="HS256"
                )["user_id"]
            except:
                return dict(status=403)

            if request.method == "GET":
                return cls.get(user_id, *args, **kwargs)

            if request.method == "POST":
                return cls.post(user_id, *args, **kwargs)

class Login(DispatchLogic.Auth):
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
            secure=False
        )

        return response

class Register(DispatchLogic.Auth):
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





class Sections(DispatchLogic.ContentManager):
    valid_methods=["OPTIONS", "GET", "POST"]

    @classmethod
    def get(cls, user_id, *args, **kwargs):
        payload = requests.get(
            CM.path + f"/api/sections?filters[user_id][$eq]={user_id}",
            headers=CM.headers
        ).json()

        return dict(
            status=200,
            data = payload["data"]
        )


    @classmethod
    def post(cls, user_id, *args, **kwargs):
        req_data = dict(
            data = request.get_json()
        )
        req_data["data"]["user_id"] = int(user_id)

        resp = requests.post(
            CM.path + f"/api/sections",
            json = req_data,
            headers=CM.headers,
        )
        if "error" not in resp.json():
            return dict(status=200)
        return dict(status=400)

class Section(DispatchLogic.ContentManager):
    valid_methods=["OPTIONS", "GET", "POST"]

    @classmethod
    def post(cls, *args, **kwargs):
        pass


class Topics(DispatchLogic.ContentManager):
    valid_methods=["OPTIONS", "GET", "POST"]

    @classmethod
    def get(cls, user_id, *args, **kwargs):
        payload = requests.get(
            CM.path + f"/api/topics?filters[user_id][$eq]={user_id}",
            headers=CM.headers
        ).json()

        return dict(
            status=200,
            data=payload["data"]
        )

    @classmethod
    def post(cls, user_id, *args, **kwargs):
        req_data = dict(
            data = request.get_json()
        )

        req_data["data"]["user_id"] = int(user_id)
        resp=requests.post(
            CM.path + f"/api/topics",
            json=req_data,
            headers=CM.headers,
        )

        if "error" not in resp.json():
            return dict(status=200)
        return dict(status=400)


class Topic(DispatchLogic.ContentManager):
    pass


