from django.apps import AppConfig


class ProyectoEstacionConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'proyecto_estacion'

    def ready(self):
        import proyecto_estacion.signals
        