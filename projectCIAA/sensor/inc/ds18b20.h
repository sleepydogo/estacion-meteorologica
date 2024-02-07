/*
------------------------------------------------------------------------------
~ File   : ds18b20.h
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

#ifndef __DS18B20_H_
#define __DS18B20_H_

/*----------------------------------------------------------*/

#include <stdint.h>
#include "ds18b20_conf.h"

/* ------------------------------------------------------------------ */

#ifndef Delay_US

#error [DS-01] You are not define the usecond delay function

#endif

/* ------------------------ Library ------------------------ */
#define _DS18B20_LIBRARY_VERSION 0.0.0

/* ------------------------ Timing ------------------------- */
/* :::::::::: u second :::::::::: */
#define _DS18B20_1US_WAIT    1U
#define _DS18B20_2US_WAIT    2U
#define _DS18B20_60US_WAIT   40U
#define _DS18B20_80US_WAIT   50U
#define _DS18B20_400US_WAIT  250U
#define _DS18B20_480US_WAIT  300U   //todos los valores fueron ajustados c/osciloscopio

/* :::::::::: m second :::::::::: */
#ifndef _DS18B20_REINIT_DELAY

#define _DS18B20_REINIT_DELAY  1000U

#endif

/* ------------------------ Public ------------------------- */
#define _DS18B20_T_DIVIDER   16.0f
#define _DS18B20_BYTE_LENGTH 8

#define GPIO_SetOutputPin(GPIOx, Pinx)       gpioWrite( GPIOx, 1 );
#define GPIO_ResetOutputPin(GPIOx, Pinx)     gpioWrite( GPIOx, 0 );

#define GPIO_ReadInputPin(GPIOx, Pinx)       gpioRead(GPIOx)

#define _GPIO_PIN_LOW   0
#define _GPIO_PIN_HIGH  1

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Types ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
enum DS18B20CMD_TypeDef
{
	
	_DS18B20_CMD_READ_ROM          = 0x33,
	_DS18B20_CMD_CONVERT_T         = 0x44,
	_DS18B20_CMD_MATCH_ROM         = 0x55,
	_DS18B20_CMD_READ_SCRATCHPAD   = 0xBE,
	_DS18B20_CMD_WRITE_SCRATCHPAD  = 0x4E,
	_DS18B20_CMD_COPY_SCRATCHPAD   = 0x48,
	_DS18B20_CMD_RECALL_E2         = 0xB8,
	_DS18B20_CMD_READ_POWER_SUPPLY = 0xB4,
	_DS18B20_CMD_SKIP_ROM          = 0xCC,
	_DS18B20_CMD_ALARM_SEARCH_ROM  = 0xEC,
	_DS18B20_CMD_SEARCH_ROM        = 0xF0,
	
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Enum ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Struct ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Class ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Prototype ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* :::::::::::::::::: Initialize ::::::::::::::::::: */
uint8_t DS18B20_Init(void);
uint8_t DS18B20_Start(void);

/* :::::::::::::: Rom Data Management :::::::::::::: */
void    DS18B20_WriteData(uint8_t Data);
uint8_t DS18B20_ReadData(void);

/* :::::::::::::::: Get Temperature :::::::::::::::: */
float DS18B20_GetTemperature(void);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End of the program ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

#endif /* __DS18B20_H_ */
