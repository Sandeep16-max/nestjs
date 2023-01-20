interface para {
    age: number;
    name: string;
}
export declare class ParameterController {
    route(p: para): string;
    query(q: para): string;
    headers(h: Record<string, any>): string;
}
export {};
