from django.db import models

# Create your models here.



class Topic(model.Model):
    
    owner = models.ForeignKey(
        'User',
        on_delete = models.CASCADE,
    )
    
    name = models.CharField(
        max_lenght = 50,
    )
    
    description = models.TextArea()