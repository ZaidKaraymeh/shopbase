from django.urls import path
from base import views


urlpatterns = [
    path("", views.getPosts, name="get_posts"),
    path("<str:pk>/post", views.getPost, name="get_post"),
]