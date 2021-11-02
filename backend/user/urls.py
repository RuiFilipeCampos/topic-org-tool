
# Django Imports <
from django.conf.urls import url

## importing the views
from user import views as view



urlpatterns = [
    
    # This is basically where the app is
    url(
        "user/dashboard/",
        view.Dashboard.as_view(),
        name="dashboard"
        ),
    
    # This is for creating new users
    url(
        "user/register/",
        view.Register.as_view(),
        name="register"
        ),
]