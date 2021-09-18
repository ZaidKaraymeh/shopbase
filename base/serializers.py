from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth.models import User
from .models import Post, Comment, Reply

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class ReplySerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Reply
        fields = '__all__'

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data



class CommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'

    def get_replies(self, obj):
        items = obj.reply_set.all()
        serializer = ReplySerializer(items, many=True)
        return serializer.data

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data


class PostSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

    def get_comments(self, obj):
        items = obj.comment_set.all()
        serializer = CommentSerializer(items, many=True)
        return serializer.data


    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data