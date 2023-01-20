export declare class UsersController {
    getShow(): {
        message: string;
    };
    redirectNetflix(): {
        shows: string[];
        message: string;
        isRedirectPath: boolean;
    };
    getRecommendations(): {
        url: string;
        statusCode: number;
    } | {
        url: string;
        statusCode?: undefined;
    };
    getLatestShows(): {
        shows: string[];
        message: string;
    };
}
