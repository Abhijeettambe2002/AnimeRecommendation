from django.db import models
from django.contrib.auth.models import User


class UserWatchList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    episodes = models.CharField(max_length=50, blank=True)
    score = models.CharField(max_length=50, blank=True)
    duration = models.CharField(max_length=50, blank=True)
    image_url = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.title
