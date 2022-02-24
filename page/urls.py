from django.urls import path
from . import views


urlpatterns = [
    
    path('', views.index, name="index"),
    path('login', views.login, name="login"),
    path('register', views.register, name="register"),
    path('about', views.about, name="about"),
    path('statics', views.statics, name="statics"),
    path('account', views.account, name="account"),

]