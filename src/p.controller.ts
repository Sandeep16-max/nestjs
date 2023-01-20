import { Controller, Ip, HostParam, Get } from '@nestjs/common';

//@Controller({ path:'/p', host: ':app.domain.com'})
@Controller('/p')
export class p
{
    @Get()
    //  methodp(@HostParam() param: Record<string,any>)
    methodp(@Ip() ip: string)
     {
        console.log(ip);
        return "success"
     }
}