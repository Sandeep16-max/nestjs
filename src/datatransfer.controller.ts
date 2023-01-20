import {Controller, Body, Post } from '@nestjs/common';

interface DTO{
 name: string,
 age: number,
}
@Controller('/data')
export class DataController
{
    @Post('/profile')
    data(@Body() b: DTO)
    {
        console.log(b);
        return 'success';
    }
}