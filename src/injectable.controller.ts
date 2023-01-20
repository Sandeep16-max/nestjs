import { Controller, Inject, Optional } from '@nestjs/common';
import { UsersStore } from './stores/store'
import { Store } from './stores/sss'
@Controller('/pap')
export class pap{
    // constructor(@Inject('store') private pg : UsersStore)
    //store naam ke provider ke liye jo class hai vo aajegee
    // constructor(@Inject(UsersStore) private pg : UsersStore)
    //Inject decorator is used for injecting any class by its class name
    // constructor(@Optional() private pg : UsersStore)
    //this optional decorator is used for agr providers me nhi hai aisa kuch to
    //(UsersStore naam ka provider nhi hai to bhi error nhi dega)
    // constructor(@Inject('Store') private pg : Store)
    // {
    // console.log(this.pg);
    // }
}