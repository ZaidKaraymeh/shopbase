from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    image = models.ImageField(upload_to="images", height_field=None, width_field=None, max_length=None)
    caption = models.TextField(editable=True, null=True)
    description = models.TextField(editable=True, null=True)
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.caption

class Comment(models.Model):
    comment = models.TextField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment
    
