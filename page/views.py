from django.shortcuts import render, redirect, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from django.template import loader
from templates.python import New



def index(request):

    data = {"footer":True, "title":"Whatsapp", "login":False}

    return render(request, 'index.html', data)


def account(request):

    data = {"footer":False, "title":"Account", "login":True}

    Data = New.Get_Data(request)
    if Data:
        myData = []
        for ch in Data['image']:
            myData.append(ch)
        return JsonResponse({'result': myData})
    
  
    return render(request, 'account/index.html', data)
#
def login(request):

    data = {"footer":True, "title":"Login", "login":False}

    return render(request, 'login.html', data)

def register(request):

    data = {"footer":True, "title":"Register", "login":False}

    return render(request, 'register.html', data)

def about(request):

    data = {"footer":True, "title":"About", "login":False}

    return render(request, 'about.html', data)

def statics(request):

    data = {"footer":True, "title":"Statics", "login":False}

    return render(request, 'statics.html', data)