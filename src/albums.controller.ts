import { Controller, Get, Req, HttpCode, HttpStatus, Res, Header, Redirect } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('/albums')
 export class AlbumsController{
   @Get()
   //@HttpCode(205)
   @Header('Cache-Control','none') //to set the header of the response.
   @HttpCode(HttpStatus.OK)//other method to set http code by using enum
   //we can also send httpcode by response obj.
   getprofile(@Req() request: Request, @Res({passthrough : true}) response: Response) //here Request is a type
   {                                   //request is a abject
    console.log(request.protocol);     //@Req() is a decorator
    //this response we have to send if we do not use passthrough 
    // response.send/json(
    // {
    //     name:"hello1"
    // })
    // response.status(200); to set the status code
    return "hello";
   }
}