from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):

    caption = models.TextField(editable=True, null=True)
    description = models.TextField(editable=True, null=True)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.caption

class Comment(models.Model):
    comment = models.TextField(max_length=9000)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment
    
class Reply(models.Model):
    reply = models.TextField(max_length=9001)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True)
