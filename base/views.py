from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import Post, Comment
from base.serializers import PostSerializer
from .posts import posts as list_posts
from rest_framework import status
# Create your views here.

@api_view(['GET'])
def getPosts(request):
    # serializer = PostSerializer(posts, many=True)
    # posts = Post.objects.all()
    # serializer = PostSerializer(posts, many=True)
    return Response(list_posts)

@api_view(['GET'])
def getPost(request, pk):
    posts = Post.objects.get(id=pk)
    serializer = PostSerializer(posts, many=False)
    return Response(serializer.data)