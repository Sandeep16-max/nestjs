import { Controller, Get, Req, Header, Redirect } from '@nestjs/common';
import { Request } from 'express';
@Controller('users')
 export class UsersController{
   @Get('test-api')
   //@Redirect("/users/wallet",302)//this is static redirect we can also do dynamic redirect
  @Redirect() //this decorator is for dynamic redirect
   testapi(){
    const rn=(Math.random()*10+1)
    if(rn>5)
    {
      return {
        url:'/users/profile',
        statusCode:302,
      };
    }
    else
    {
      return {
        url:'/album',
        statusCode:302,
      };
    }
   // return 'hello world';
   }
   @Get('/profile')
   getprofile(@Req() request: Request) //here Request is a type
   {                                   //request is a object
    console.log(request.protocol);     //@Req() is a decorator
    return "hello from sandeep";
   }
   @Get('/wallet')
wallet(){
 return 'hello worldddd';
}
}
