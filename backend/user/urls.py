
# Django Imports <
from django.conf.urls import url

## importing the views
from users.views import dashboard

url_patterns = [
    url("dashboard/", dashboard, name="dashboard"),
]