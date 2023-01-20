import { userinfo } from './DTO/userinfo';
export declare class Operation {
    adduser(b: userinfo): string;
    alluser(): any[];
    oneuser(p: number): any;
    updateuser(b: userinfo, p: number): string;
    deleteuser(p: number): string;
}
