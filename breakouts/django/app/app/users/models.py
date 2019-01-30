from django.db import models
from datetime import datetime
from movies.models import Movies

# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=1000)
    movies = models.ManyToManyField(Movies)
    created_at = models.DateTimeField(default=datetime.now , blank=True)
    pass