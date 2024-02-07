/*
------------------------------------------------------------------------------
~ File   : ds18b20_conf.h
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

#ifndef __DS18B20_CONF_H_
#define __DS18B20_CONF_H_

/* --- Required Driver.Library---- */

#include "sapi.h"       // <= sAPI header


/* -------- Configuration -------- */
/* GPIO */
#define _DS18B20_GPIO          GPIO7
#define _DS18B20_PIN           GPIO7

#define _DS18B20_REINIT_DELAY  1000U

/* Delay Functions */
#define Delay_MS(tim)          delay((tim))
#define Delay_US(tim)          delayInaccurateUs((tim))

#endif /* __DS18B20_CONF_H_ */
