import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { userinfo } from './DTO/userinfo';
let USERS=[];

@Controller('/operation')
export class Operation{
  @Post()
  adduser(@Body() b: userinfo)
  {
      USERS.push(b);
      return "user added";
  }

  @Get()
  alluser()
  {
    return USERS;
  }

  @Get(':id')
  oneuser(@Param('id') p: number)
  {
    
    return USERS.find(user=>user.id==p)
  }

  @Put(':id')
    updateuser(@Body() b: userinfo, @Param('id') p: number)
    {
        const indx=USERS.findIndex(user=>user.id==p)
        if(!indx)
        {
            return;
        }
        else{
            USERS[indx]=b;
            return "updated"
        }
    }
    @Delete(':id')
    deleteuser(@Param('id') p:number)
    {
        USERS.filter(user=>user.id!=p);
        return "deleted";
    }
}