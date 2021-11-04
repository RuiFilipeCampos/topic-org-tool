from django.shortcuts import render
from django.views.generic import View


from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator





@method_decorator(csrf_exempt, name="dispatch")
class Register(View):
    
    def post(self, request, *args, **kwargs):
        """Create a new user.
        """
        import json
        from user.models import User

        data = json.loads(
            request.body
        )

        try: 
            User.objects.get(pk = data["username"])
            return HttpResponse("error")
        except User.DoesNotExist:
            pass
        
        try: 
            User.objects.get(email = data["email"])
            return HttpResponse("error")
        except User.DoesNotExist:
            pass
        
        
        User(**data).save()
        return HttpResponse("abc")
    



class UserLogin(View):
    def post(self, request, *args, **kwargs):
        """Login a user.
        """
        pass
    
