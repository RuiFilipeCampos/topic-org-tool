from django.db import models

from django_cryptography.fields import encrypt







class User(models.Model):
    username = models.CharField(
        max_length=50,
        primary_key=True,
    )
    
    password = models.CharField(
        max_length=100
    )
    
    email = models.CharField(
        max_length=100
    )
    
    
    
    @classmethod
    def match_field(cls, field_name, field_value):

        try: 
            cls.objects.get(
                **{field_name : field_value}
            )
            return True
        except cls.DoesNotExist:
            return False