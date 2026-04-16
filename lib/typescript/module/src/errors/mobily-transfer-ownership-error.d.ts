export declare class MobilyTransferOwnershipError extends Error {
    readonly type: MobilyTransferOwnershipError.Type;
    readonly message: string;
    readonly nativeStack?: any;
    constructor(type: MobilyTransferOwnershipError.Type, message: string, nativeStack?: any);
}
export declare namespace MobilyTransferOwnershipError {
    enum Type {
        NOTHING_TO_TRANSFER = 0,
        TRANSFER_TO_SAME_CUSTOMER = 1,
        ALREADY_PENDING = 2,
        WEBHOOK_NOT_PROCESSED = 3,
        WEBHOOK_FAILED = 4
    }
}
//# sourceMappingURL=mobily-transfer-ownership-error.d.ts.map