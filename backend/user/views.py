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




    
    
    
    def has_object_permission( self, *args, **kwargs ):
        print("\n\n\n\n")

    def post(self, request, *args, **kwargs):
        """Create a new user.
        """
        
        data = json.loads(request.body)
        
        if User.match_field("username", data["username"])\
        or User.match_field("email",    data["email"]   ):
            return JsonResponse(dict(
                message = "Email or Username already exists.",
                code = 3033,
            ))

        plaintext_password = data["password"]
        encrypted_password = make_password(plaintext_password)

        assert check_password(plaintext_password, encrypted_password)
 
        data["password"] = encrypted_password
        User(**data).save()
        return JsonResponse(
                dict(code=200,)
        )
        


class Login(View):
    

    
    def post(self, request, *args, **kwargs):
        """Login a user.
        """
        
        
        # need to take care of cross site registration forgery stuff
        
        data = json.loads(request.body)

        try:
            user = User.objects.get(
                username=data["username"]
            )
        except User.DoesNotExist:       
            return JsonResponse(dict(
                code = 404, #need to check these codes
                message = "Username does not exist!",
            ))
        
        
        if user.password == make_password(data["password"]):
            
            # login stuff happens here rite?
            
            
            return JsonResponse(dict(code=200))

        return JsonResponse(dict(code=404, message="Username/Password does not match."))
