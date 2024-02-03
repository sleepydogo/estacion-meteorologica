from .models import Dato
from rest_framework import viewsets,permissions
from .serializers import DatoSerializer

class DatoViewSet(viewsets.ModelViewSet):
    queryset = Dato.objects.all() #Que conjunto de datos se van a mostrar
    permission_classes = [permissions.AllowAny] #Permisos para acceder a los datos
    serializer_class = DatoSerializer #Que serializador se va a usar para mostrar los datos