import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Query, Put, Body } from '@nestjs/common';

@Controller('/users1')
export class users1
{
    @Put('profile/:age/:name')
    method2(@Param("age", new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) age:number, @Param("name") name:string)
    {
         return ` Hello ${name}, your age is ${age} `
    }
    @Put('/profile1')
    method3(@Query("age", new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) age:number, @Query("name") name:string)
    {
         return ` Hello ${name}, your age is ${age} `
    }
    @Put('/Profile3')
    method4(@Body("age", new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) age:number, @Body("name") name:string)
    {
         return ` Hello ${name}, your age is ${age} `
    }
}
