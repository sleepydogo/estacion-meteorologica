/*
------------------------------------------------------------------------------
~ File   : ds18b20.c
~ Author : Majid Derhambakhsh
~ Version: V0.0.0
~ Created: 12/16/2020 08:31:00 PM
~ Brief  :
~ Support:
		   E-Mail : Majid.do16@gmail.com (subject : Embedded Library Support)

		   Github : https://github.com/Majid-Derhambakhsh
------------------------------------------------------------------------------
~ Description:

~ Attention  :

~ Changes    :
------------------------------------------------------------------------------
*/

#include "ds18b20.h"

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ::::::::::::::: Pin Configuration ::::::::::::::: */

void	GPIO_SetPinAsInput(void){
      gpioConfig( GPIO7, GPIO_INPUT );
   }
   
void	GPIO_SetPinAsOutput(void){
      gpioConfig( GPIO7, GPIO_OUTPUT );
   }
   
/* :::::::::::::::::: Initialize ::::::::::::::::::: */
uint8_t DS18B20_Init(void)
{
	
	uint8_t pinState = 0;
	
	/* ~~~~~~~~~~ Change Pin Direction ~~~~~~~~~~ */
	GPIO_SetPinAsOutput();
	/* .................... 
	GPIO_ResetOutputPin(_DS18B20_GPIO, _DS18B20_PIN);*/
   gpioWrite( GPIO7, 0 );
   
	Delay_US(_DS18B20_480US_WAIT);
	
	/* ~~~~~~~~~~ Change Pin Direction ~~~~~~~~~~ */
	GPIO_SetPinAsInput();
	
	Delay_US(_DS18B20_80US_WAIT);
	
//	if (GPIO_ReadInputPin(_DS18B20_GPIO, _DS18B20_PIN) == _GPIO_PIN_HIGH) 
	if ( gpioRead(GPIO7) == _GPIO_PIN_HIGH)
   {
		pinState = 1;
      uartWriteString( UART_USB,"No device found\r\n" );
      while(1);      
	}
	
	Delay_US(_DS18B20_400US_WAIT);
	
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	return pinState;
	
}

uint8_t DS18B20_Start(void)
{
	uint8_t cnStatus = 0;
	
	/* ~~~~~~~~~~ Init / Reinitialize ~~~~~~~~~~ */
	cnStatus = DS18B20_Init();	
	/* .................... */
	DS18B20_WriteData(_DS18B20_CMD_SKIP_ROM);
	DS18B20_WriteData(_DS18B20_CMD_CONVERT_T);
	
   Delay_MS(_DS18B20_REINIT_DELAY);
	
	/* ~~~~~~~~~~ Init / Reinitialize ~~~~~~~~~~ */
	cnStatus = DS18B20_Init();
	/* .................... */
	DS18B20_WriteData(_DS18B20_CMD_SKIP_ROM);
	DS18B20_WriteData(_DS18B20_CMD_READ_SCRATCHPAD);

	return cnStatus;	
}

/* :::::::::::::: Rom Data Management :::::::::::::: */
uint8_t DS18B20_ReadData(void)
{
	uint8_t dsData   = 0;
	uint8_t pinCount = 0;
	
	/* ~~~~~~~~~~ Change Pin Direction ~~~~~~~~~~ */
//	GPIO_SetPinAsInput();
	
	/* .................... */
	for (; pinCount < _DS18B20_BYTE_LENGTH; pinCount++)
	{
		/* ::::: Change Pin Direction ::::: */
		GPIO_SetPinAsOutput();
		
		/* .................... */
		GPIO_ResetOutputPin(_DS18B20_GPIO, _DS18B20_PIN);
		Delay_US(_DS18B20_2US_WAIT);
		
		/* ::::: Change Pin Direction ::::: */
		GPIO_SetPinAsInput();
      
		Delay_US(6);		
		/* .................... */
		if (GPIO_ReadInputPin(_DS18B20_GPIO, _DS18B20_PIN) == _GPIO_PIN_HIGH)
		{
			dsData |= (1 << pinCount);
		}
		
		Delay_US(_DS18B20_60US_WAIT); //_DS18B20_60US_WAIT
		
	}
	
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	return dsData;
	
}
void    DS18B20_WriteData(uint8_t Data)
{
	
	uint8_t pinCount = 0;
	
	/* ~~~~~~~~~~ Change Pin Direction ~~~~~~~~~~ */
	GPIO_SetPinAsOutput();
	
	/* .................... */
	for (; pinCount < _DS18B20_BYTE_LENGTH; pinCount++)
	{
		
		if ((Data & (1 << pinCount)) != 0)
		{
			/* ::::: Change Pin Direction ::::: */
			GPIO_SetPinAsOutput();
			/* .................... */
			GPIO_ResetOutputPin(_DS18B20_GPIO, _DS18B20_PIN);
			Delay_US(_DS18B20_2US_WAIT);
			/* ::::: Change Pin Direction ::::: */
			GPIO_SetPinAsInput();
			Delay_US(_DS18B20_60US_WAIT);
		}
		else
		{
			/* ::::: Change Pin Direction ::::: */
			GPIO_SetPinAsOutput();
			/* .................... */
			GPIO_ResetOutputPin(_DS18B20_GPIO, _DS18B20_PIN);
			Delay_US(_DS18B20_60US_WAIT);
			/* ::::: Change Pin Direction ::::: */
			GPIO_SetPinAsInput();
         Delay_US(_DS18B20_2US_WAIT);
		}
		
	}
	
}

/* :::::::::::::::: Get Temperature :::::::::::::::: */
float DS18B20_GetTemperature(void)
{
	
	uint16_t lByte = 0;
	uint16_t hByte = 0;
	float temp = 0;
	
	/* ~~~~~~~~~~~ Read Dara ~~~~~~~~~~ */
	lByte = DS18B20_ReadData();
	hByte = DS18B20_ReadData();
	temp = ((hByte << 8) | lByte) / _DS18B20_T_DIVIDER;
	
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	return temp;
	
}

