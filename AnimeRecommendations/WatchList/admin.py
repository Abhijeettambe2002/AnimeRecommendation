from django.contrib import admin
from .models import UserWatchList


class UserWatchListAdmin(admin.ModelAdmin):
    list_display = ("user", "title", "episodes", "score", "duration", "image_url")


admin.site.register(UserWatchList, UserWatchListAdmin)

# Register your models here.
