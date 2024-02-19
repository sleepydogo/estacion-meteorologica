"""
ASGI config for estacion project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack

import proyecto_estacion.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "estacion.settings")

application = ProtocolTypeRouter(
    {
        'http': get_asgi_application(),
        'websocket': AuthMiddlewareStack(
            URLRouter(
                proyecto_estacion.routing.websocket_urlpatterns
            )
        )   
    }
)
