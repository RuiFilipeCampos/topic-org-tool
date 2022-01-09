from requests.api import head
from flask import Flask
from flask import request
from flask import make_response
import requests
import controller as cntrl
import jwt
from settings import JWT_KEY
from settings import HTTP_ONLY
from settings import SECURE
from responses import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

class Routes:
    @app.route("/auth/login", methods=["POST", "OPTIONS"])
    def login_router():
        return Login.dispatch()

    @app.route("/auth/register", methods=["POST", "OPTIONS"])
    def register_router():
        return Register.dispatch()

    @app.route("/cm/sections", methods=["OPTIONS", "GET", "POST"])
    def all_sections():
        return Sections.dispatch()

    @app.route("/cm/sections/<int:section_id>", methods=["OPTIONS", "GET", "POST"])
    def specific_section(section_id):
        return Section.dispatch(section_id)

    @app.route("/cm/topics", methods=["OPTIONS", "GET", "POST"])
    def all_topics():
        return Topics.dispatch()

    @app.route("/auth/check", methods=["GET", "OPTIONS"])
    @cross_origin(supports_credentials=True,)
    def am_I_logged_in():

        try:
            jwt_token = request.cookies.get("jwt", None)
            print(jwt_token)
            if jwt_token is None:
                raise KeyError
            user_id:int = jwt.decode(
                jwt_token.encode(),
                JWT_KEY,
                algorithms="HS256"
            )["user_id"]
            return C200("")
        except KeyError:
            print("There is no cookie")
            return C403("")
        except:
            print("likely decoding error")
            return C403("")

class CM:
    """ Connector to Content Managemer """
    from settings import STRAPI_TOKEN
    from settings import CM_PATH

    path = CM_PATH
    token = STRAPI_TOKEN
    headers = dict(
        Authorization = f"bearer {token}"
    )


class BaseStrapiView:
    @classmethod
    def dispatch(cls, *args, **kwargs):
        jwt_token = request.cookies.get("jwt")
        
        # Authentification is done via jwt decryption
        # The content of it is the user id
        # Having a user_id being passed around
        # implies that the user is authenticated
        try:
            user_id:int = jwt.decode(
                jwt_token.encode(),
                JWT_KEY,
                algorithms="HS256"
            )["user_id"]
        except:
            return C403("")

        if request.method == "GET":
            return cls.get(user_id, *args, **kwargs)

        if request.method == "POST":
            return cls.post(user_id, *args, **kwargs)

    @classmethod
    def get(cls, user_id, *args, **kwargs):
        payload = requests.get(
            cls.endpoint + f"?filters[user_id][$eq]={user_id}",
            headers=CM.headers
        ).json()

        return C200("", data=payload["data"])

    @classmethod
    def post(cls, user_id, *args, **kwargs):
        req_data = dict(
            data = request.get_json()
        )

        req_data["data"]["user_id"] = int(user_id)
        resp = requests.post(
            cls.endpoint,
            json = req_data,
            headers=CM.headers,
        )

        if "error" not in resp.json():
            return C200("")
        return C400("")

class Sections(BaseStrapiView):
    name = "sections"
    endpoint = CM.path + fr"/api/{name}"

class Section(BaseStrapiView):
    name = "section"
    endpoint = CM.path + fr"/api/{name}"

class Topics(BaseStrapiView):
    name = "topics"
    endpoint = CM.path + fr"/api/{name}"

class Topic(BaseStrapiView):
    name = "topic"
    endpoint = CM.path + fr"/api/{name}"

class DispatchLogic:
    class Auth:
        @classmethod
        def dispatch(cls):
            if request.method == "POST":
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
                return C403("")

            if request.method == "GET":
                return cls.get(user_id, *args, **kwargs)

            if request.method == "POST":
                return cls.post(user_id, *args, **kwargs)

class Login(DispatchLogic.Auth):
    @classmethod
    def options(cls):
        r = make_response()
        r.headers['Access-Control-Allow-Origin'] = '*'
        r.headers['Access-Control-Allow-Methods'] = '*'
        r.headers['Access-Control-Allow-Headers'] = '*'
        return r
            

    @classmethod
    def post(cls):
        payload = request.get_json()
        if isinstance(payload, str):
            import json
            payload = json.loads(payload)


        username = payload.get("username", None)
        print(username)
        password = payload.get("password", None)

        if username is None or password is None:
            return C400("Did you provide both `username` and `password`?")

        jwt = cntrl.auth(username, password)
        print(jwt)
        if jwt is None:
            return C401("[401 Unauthorized] Login was not successful.")


        response = make_response()
        import datetime
        expire_date = datetime.datetime.now()
        expire_date = expire_date + datetime.timedelta(days=90)

        response.set_cookie(
            "jwt", 
            value=f"{jwt}", 
            httponly=HTTP_ONLY,
            secure=SECURE,
            path='/', 
            expires = expire_date,
        #    max_age=90 * 60 * 60 * 24, 
            domain="127.0.0.1:3000",
            samesite='None',
        )

        response.headers['Access-Control-Allow-Credentials'] = True


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
            return C400("Did you provide both `username` and `password`?")

        if cntrl.new_user(username, password):
            return C201("A new user has been created.")
        return C409("Username already exists.")
