export declare class MobilyError extends Error {
    readonly type: MobilyError.Type;
    readonly message: string;
    readonly nativeStack?: any;
    constructor(type: MobilyError.Type, message: string, nativeStack?: any);
}
export declare namespace MobilyError {
    enum Type {
        STORE_UNAVAILABLE = 0,
        SERVER_UNAVAILABLE = 1,
        NO_CUSTOMER_LOGGED = 2,
        UNKNOWN_ERROR = 3
    }
}
//# sourceMappingURL=mobily-error.d.ts.map