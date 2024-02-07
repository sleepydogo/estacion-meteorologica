/*============================================================================
 * Autor:
 * Licencia:
 * Fecha:
 *===========================================================================*/

// Inlcusiones
#include "ds18b20.h"
#include "sapi.h" // <= Biblioteca sAPI
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *itoa(int value, char *result, int base)
{
    // check that the base if valid
    if (base < 2 || base > 36)
    {
        *result = '\0';
        return result;
    }

    char *ptr = result, *ptr1 = result, tmp_char;
    int tmp_value;

    do
    {
        tmp_value = value;
        value /= base;
        *ptr++ =
            "zyxwvutsrqponmlkjihgfedcba9876543210123456789abcdefghijklmnopqrstuvwxyz"[35 + (tmp_value - value * base)];
    } while (value);

    // Apply negative sign
    if (tmp_value < 0)
        *ptr++ = '-';
    *ptr-- = '\0';
    while (ptr1 < ptr)
    {
        tmp_char = *ptr;
        *ptr-- = *ptr1;
        *ptr1++ = tmp_char;
    }
    return result;
}

float normalizar(int x)
{

    // Realizar la operación matemática y asegurarse de que el resultado esté en el rango uint16_t
    float resultado;

    resultado = (-1.0 / 5.0) * x + 160.0;

    if (resultado < 0.0)
    {
        return 0.0;
    }
    else if (resultado > 100.0)
    {
        return 100.0;
    }
    else
    {
        return resultado;
    }
}

// FUNCION PRINCIPAL, PUNTO DE ENTRADA AL PROGRAMA LUEGO DE ENCENDIDO O RESET.

int main(void)
{
    // ---------- CONFIGURACIONES ------------------------------

    // Inicializar y configurar la plataforma
    boardConfig();

    // Inicializar UART
    uartConfig(UART_232, 115200);

    // Inicializar sensores
    // Iniciar DHT11
    adcConfig(ADC_ENABLE); /* ADC */
    char msg[20] = {0};
    float tempFloor = 0.1;
    float humidityFloor = 0.4;
    volatile int lecturaADC = 0;
    dht11Init(GPIO8);
    float humidity11 = 0.3, temperature11 = 25.5;

    static char stringHF[10];

    while (TRUE)
    {

        lecturaADC = adcRead(CH1);

        DS18B20_Start();
        tempFloor = DS18B20_GetTemperature();


        humidityFloor = normalizar(lecturaADC);
        // humidityFloor = (-1.0/5.0) * lecturaADC + 160.0;

        // Sensar humedad y temperatura aire
        if (dht11Read(&humidity11, &temperature11))
        {
            // Si leyo bien prendo el LEDG y enciendo el LEDR
            gpioWrite(LEDG, ON);
            gpioWrite(LEDR, OFF);
        }
        else
        {
            gpioWrite(LEDG, OFF);
            gpioWrite(LEDR, ON);
        }

        // Sensar humedad suelo

        // Sensar temperatura suelo ?

        // Preparar JSON con datos
        char jsonString[255];

        char stringValue1[5]; // Ajusta el tamaño según sea necesario
        char stringValue2[5]; // Ajusta el tamaño según sea necesario
        char stringValue3[5];
        gcvt(temperature11, 5, stringValue1);
        gcvt(humidity11, 5, stringValue2);
        gcvt(humidityFloor, 5, stringHF);
        gcvt(tempFloor, 5, stringValue3);


        strcat(jsonString, stringValue2);
        strcat(jsonString, "/");
        strcat(jsonString, stringValue1);
        strcat(jsonString, "/");
        strcat(jsonString, stringHF);
        strcat(jsonString, "/");
        strcat(jsonString, stringValue3);
        strcat(jsonString, "/#");

        // Enviar JSON por serie, funciona con texto normal
        // char miTexto[] = "Hola\r\n";
        uartWriteString(UART_232, jsonString);

        memset(jsonString, 0, sizeof(jsonString));

        // Delay X Tiempo.
        delay(10000);
    }

    // NO DEBE LLEGAR NUNCA AQUI, debido a que a este programa se ejecuta
    // directamenteno sobre un microcontroladore y no es llamado por ningun
    // Sistema Operativo, como en el caso de un programa para PC.
    return 0;
}
