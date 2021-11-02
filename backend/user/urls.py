
# Django Imports <
from django.conf.urls import url

## importing the views
from user.views import dashboard

urlpatterns = [
    url("dashboard/", dashboard, name="dashboard"),
]