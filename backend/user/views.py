from django.shortcuts import render, redirect
from django.views.generic import View


# Internal Imports
from user.forms import CustomUserCreationForm



# Create your views here.
def dashboard(request):
    return render(request, 'user/dashboard.html')



class RegisterView(View):
    
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
            return redirect("dashboard/")
        
        else:
            return render(
                request,
                "registration/register.html",
                dict(
                    form = None,
                    error = str(form),
                    )   
            )
  
