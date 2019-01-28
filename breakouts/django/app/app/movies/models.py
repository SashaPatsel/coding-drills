from django.db import models
from datetime import datetime

# Create your models here.
class Movies(models.Model):
    movie_name = models.CharField(max_length=10000)
    movie_poster = models.CharField(max_length=10000)
    movie_year = models.CharField(max_length=10000)
    created_at = models.DateTimeField(default=datetime.now , blank=True)