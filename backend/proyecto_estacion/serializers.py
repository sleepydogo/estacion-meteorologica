from rest_framework import serializers
from .models import Dato

class DatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dato
        fields = ('id', 'fecha', 'HA', 'TA', 'HS', 'TS')
        read_only_fields = ('fecha', )