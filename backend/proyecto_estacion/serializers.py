from rest_framework import serializers
from .models import Dato

class DatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dato
        fields = ('id', 'fecha', 'temperatura', 'humedad', 'temp_suelo', 'hum_suelo')
        read_only_fields = ('fecha', )