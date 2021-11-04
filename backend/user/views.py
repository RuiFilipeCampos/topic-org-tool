from django.shortcuts import render
from django.views.generic import View


from django.http import HttpResponse
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password

from django_cryptography.fields import get_encrypted_field

import json

from user.models import User





@method_decorator(csrf_exempt, name="dispatch")
class Register(View):
    
    def post(self, request, *args, **kwargs):
        """Create a new user.
        """
        
        data = json.loads(
            request.body
        )

        
        
        if User.match_field(
            "username", data["username"]
        )\
        or User.match_field(
            "email", data["email"]
        ):
            
            
            return JsonResponse(dict(
                message = "Email or Username already exists.",
                code = 3033,
            ))


        plaintext_password = data["password"]
        encrypted_password = make_password(plaintext_password)
        
        assert check_password(plaintext_password, encrypted_password)
           
        data["password"] = encrypted_password
        User(**data).save()
        return JsonResponse(dict(
            code=200,
        ))



class UserLogin(View):
    def post(self, request, *args, **kwargs):
        """Login a user.
        """
        pass
    
