
from channels.generic.websocket import WebsocketConsumer
import json

class MyConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        # Procesar los datos recibidos
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Enviar una respuesta
        self.send(text_data=json.dumps({
            'message': 'Mensaje recibido: {}'.format(message)
        }))

    async def send_message(self, event):
        await self.send(text_data=json.dumps(event))