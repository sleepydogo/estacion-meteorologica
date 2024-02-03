from rest_framework import routers
from .api import DatoViewSet

router = routers.DefaultRouter() #Modulo de drf para crear todas las urls

router.register('api/datos', DatoViewSet, 'datos') #Se registra la url para acceder a los datos

urlpatterns = router.urls #Se guardan las urls en una variable para ser usadas en el archivo principal de urls