from rest_framework import routers
from .api import DatoViewSet
from django.urls import path, include

router = routers.DefaultRouter() 

router.register('api/datos', DatoViewSet, 'datos') 

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns = router.urls 