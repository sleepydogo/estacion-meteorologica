from .models import Dato
from rest_framework import viewsets,permissions
from rest_framework.response import Response
from .serializers import DatoSerializer
import base64

class DatoViewSet(viewsets.ModelViewSet):
    queryset = Dato.objects.all() 
    permission_classes = [permissions.AllowAny] 
    serializer_class = DatoSerializer 

    def create(self, request, *args, **kwargs):
        print("Datos recibidos en el endpoint /api/datos:")
        print(request.data)  # Esto imprimirá los datos recibidos en la solicitud

        # Obtener el campo 'data' del JSON
        data_encoded = request.data.get('data')

        if data_encoded:
            try:
                # Decodificar de base64
                data_decoded = base64.b64decode(data_encoded).decode('utf-8')
                print("Datos decodificados de base64:", data_decoded)
            except Exception as e:
                print("Error al decodificar de base64:", e)
                return Response({"error": "Error al decodificar de base64"}, status=400)

        return super().create(request, *args, **kwargs)