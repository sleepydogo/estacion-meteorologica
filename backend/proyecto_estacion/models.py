from django.db import models

# Create your models here.
class Dato(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    HA = models.FloatField()
    TA = models.FloatField()
    HS = models.FloatField()
    TS = models.FloatField()
