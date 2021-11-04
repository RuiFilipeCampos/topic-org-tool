from django.db import models

from django_cryptography.fields import encrypt



class User(models.Model):
    username = models.CharField(
        max_length=50,
        primary_key=True,
    )
    
    password = encrypt(models.CharField(
        max_length=100
    ))
    
    email = encrypt(models.CharField(
        max_length=100
    ))