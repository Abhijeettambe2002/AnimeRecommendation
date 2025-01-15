from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from .forms import RegistrationForm
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from WatchList.models import UserWatchList


def user(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=True)
            login(request, user)
            return redirect("main_page")
    else:
        form = RegistrationForm()

    return render(request, "registration.html", {"form": form})


def login_page(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("main_page")
    return render(request, "login.html")


def logout_page(request):
    logout(request)
    return redirect("login_page")


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required


@login_required
def main_page(request):
    watchlist_titles = UserWatchList.objects.filter(user=request.user).values_list(
        "title", flat=True
    )
    return render(request, "index.html", {"watchlist_titles": list(watchlist_titles)})


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required


from django.contrib import messages
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required


@login_required
def add_to_watchlist(request):
    if request.method == "POST":
        titles = request.POST.get("titles")
        episodes = request.POST.get("episodes")
        scores = request.POST.get("scores")
        durations = request.POST.get("durations")
        images = request.POST.get("images")
        if titles and episodes and scores and durations and images:
            titles_list = titles.split(",")
            episodes_list = episodes.split(",")
            scores_list = scores.split(",")
            durations_list = durations.split(",")
            images_list = images.split(",")
            new_anime_added = False
            for title, episode, score, duration, image in zip(
                titles_list, episodes_list, scores_list, durations_list, images_list
            ):
                if not UserWatchList.objects.filter(
                    user=request.user, title=title
                ).exists():
                    UserWatchList.objects.create(
                        user=request.user,
                        title=title,
                        episodes=episode,
                        score=score,
                        duration=duration,
                        image_url=image,
                    )
                    new_anime_added = True
            if new_anime_added:
                messages.success(request, "Added successfully, Search for more!")
            else:
                messages.info(request, "Already in your watchlist.")
            return redirect("main_page")
    return redirect("main_page")


@login_required
def view_watchlist(request):
    watchlist = UserWatchList.objects.filter(user=request.user)
    return render(request, "watchlist.html", {"watchlist": watchlist})


from django.shortcuts import render
from django.contrib.auth.decorators import login_required


from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def view_watchlist(request):
    watchlist = UserWatchList.objects.filter(user=request.user)
    return render(request, "watchlist.html", {"watchlist": watchlist})


@login_required
def delete_from_watchlist(request, anime_id):
    anime = get_object_or_404(UserWatchList, id=anime_id, user=request.user)
    anime.delete()
    return redirect("view_watchlist")
