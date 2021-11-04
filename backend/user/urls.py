# Django Imports <
from django.conf.urls import url

## importing the views
from user import views as view



urlpatterns = [

    
    # This is for creating new users
    url(
        "user/register/",
        view.Register.as_view(),
        name="register"
        ),
    
    # this is for loggin in new users 
    url(
        "/user/login/",
        view.Login.as_view(),
        name="login"
        ),
]