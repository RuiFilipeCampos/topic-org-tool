from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib.auth import login

# Internal Imports
from user.forms import CustomUserCreationForm


import requests 

from django.urls import reverse, resolve

class Dashboard(View):
    
    def get(self, request, *args, **kwargs):


        # get a list of all topics 
        uri = request.build_absolute_uri("/topic/")
        response = requests.get(uri)


        
        return render(
            request,
            'user/dashboard.html'
        )
        

class Register(View):
    
    def get(self, request, *args, **kwargs):
        return render(
            request,
            "registration/register.html",
            dict(
                form = CustomUserCreationForm,
                error = None,
                ),
        )
         
        
    def post(self, request, *args, **kwargs):
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("/user/dashboard/")
        
        else:
            return render(
                request,
                "registration/register.html",
                dict(
                    form = None,
                    error = str(form),
                    )   
            )
  
