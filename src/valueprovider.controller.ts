import { Controller, Inject } from '@nestjs/common';

@Controller('/valueprovider')
 export class valueprovider
 {
    //  constructor(@Inject('Database_name') private db: string)     
     constructor(@Inject('Mail') private arr: string[])     
     //private se hm property ki trh istenal kr skte mtlb constructor ke bhr b
     {
        console.log(this.arr);
     }
 }