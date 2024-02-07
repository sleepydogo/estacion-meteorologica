from .models import Dato
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import DatoSerializer
import base64
import json

def parse_string_to_dict(input_string):
    # Dividir el string en partes usando '/' como delimitador
    parts = input_string.split('/')

    # Verificar si hay exactamente 4 partes
    if len(parts) != 5:
        raise ValueError("El formato del string no es válido. Se esperan 4 floats separados por '/'.")

    try:
        # Convertir cada parte a float
        float_values = [float(part) for part in parts[:-1]]

        # Crear el diccionario
        result_dict = {
            'HA': float_values[0],
            'TA': float_values[1],
            'HS': float_values[2],
            'TS': float_values[3]
        }

        return result_dict

    except ValueError as e:
        raise ValueError(f"Error al convertir a float: {e}")



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

                # Deserializar los datos JSON
                data_dict = parse_string_to_dict(data_decoded)

                # Crear un objeto Dato en la base de datos
                serializer = DatoSerializer(data=data_dict)
                if serializer.is_valid():
                    serializer.save()
                else:
                    print("Errores de validación del serializer:", serializer.errors)
                    return Response({"error": "Error en la validación del serializer"}, status=400)

            except Exception as e:
                print("Error al decodificar de base64:", e)
                return Response({"error": "Error al decodificar de base64"}, status=400)

        # No devuelvas la respuesta de super().create para evitar conflictos
        # return super().create(request, *args, **kwargs)
        return Response({"success": "Datos guardados correctamente"}, status=201)
