
# Django Imports <
from django.conf.urls import url

## importing the views
from user.views import dashboard
from user.views import RegisterView


urlpatterns = [
    
    # This is basically where the app is
    url(
        "user/dashboard/",
        dashboard,
        name="dashboard"
        ),
    
    # This is for creating new users
    url(
        "user/register/",
        RegisterView.as_view(),
        name="register"
        ),
]