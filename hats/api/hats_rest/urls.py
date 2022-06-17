from django.urls import path
from .views import api_hats, api_show_hats


urlpatterns = [
    path("hats/", api_hats, name="api_hats"),
    path("hats/<int:pk>/", api_show_hats, name="api_show_hats")
]
