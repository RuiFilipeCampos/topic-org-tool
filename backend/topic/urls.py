
# Django Imports <
from django.conf.urls import url

## importing the views
from topic import views as view



urlpatterns = [
    url(
        "topic/",
        view.TopicList.as_view(),
        name="topic-list"
        ),
    url(
        "topic/<str:username>/<str:topic_name>",
        view.Topic.as_view(),
        name="topic"
        ),
]