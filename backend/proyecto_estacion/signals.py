from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Dato
from .consumers import MyConsumer
import asyncio

@receiver(post_save, sender=Dato)
def send_message_on_create(sender, instance, created, **kwargs):
    print('me ejecute!')
    if created:
        async def send_message():
            await asyncio.sleep(1)  # Espera un segundo para asegurarse de que el objeto se haya guardado completamente
            print('signals - instance --> ', instance)
            await MyConsumer().send_message()
        asyncio.run(send_message())