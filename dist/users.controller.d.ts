import { Request } from 'express';
export declare class UsersController {
    testapi(): {
        url: string;
        statusCode: number;
    };
    getprofile(request: Request): string;
    wallet(): string;
}
