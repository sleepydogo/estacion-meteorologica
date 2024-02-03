# Generated by Django 4.2.6 on 2023-10-22 03:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('temperatura', models.FloatField()),
                ('humedad', models.FloatField()),
                ('temp_suelo', models.FloatField()),
                ('hum_suelo', models.FloatField()),
            ],
        ),
    ]
