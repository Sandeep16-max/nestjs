import {Controller, Get, Param, Query, Headers} from '@nestjs/common';

interface para{
   age: number,
   name: string,
}
@Controller('/parameters')
export class ParameterController
{
     @Get('/routeparameter/:age/:name')
    // route(@Param() p: Record<string,any>)//this record is for when we do not kmow type
    route(@Param() p: para)
     {
        console.log(p.age);
        return `{success: true, message: Hello ${p.name}, your age is ${p.age}}`;
        //to send the variable we use $ and the string can be written in (``) these not in these(''||"")
     }

     @Get('/queryparameter')
     query(@Query() q: para)//hmne yha data validation nhi lgaiii hai
     {
        console.log(q);
        return `Hello ${q.name}, your age is ${q.age}`;
     }

     @Get('/header')
     headers(@Headers() h: Record<string,any>)
     {
        console.log(h);
        return "Headers extracted";
     }
}