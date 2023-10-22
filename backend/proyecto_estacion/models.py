from django.db import models

# Create your models here.
class Dato(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    temperatura = models.FloatField()
    humedad = models.FloatField()
    temp_suelo = models.FloatField()
    hum_suelo = models.FloatField()
