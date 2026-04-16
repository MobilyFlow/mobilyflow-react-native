export declare class MobilyPurchaseError extends Error {
    readonly type: MobilyPurchaseError.Type;
    readonly message: string;
    readonly nativeStack?: any;
    constructor(type: MobilyPurchaseError.Type, message: string, nativeStack?: any);
}
export declare namespace MobilyPurchaseError {
    enum Type {
        PURCHASE_ALREADY_PENDING = 0,
        PRODUCT_UNAVAILABLE = 1,
        NETWORK_UNAVAILABLE = 2,
        BILLING_ISSUE = 3,
        WEBHOOK_FAILED = 4,
        WEBHOOK_NOT_PROCESSED = 5,
        ALREADY_PURCHASED = 6,
        RENEW_ALREADY_ON_THIS_PLAN = 7,
        NOT_MANAGED_BY_THIS_STORE_ACCOUNT = 8,
        STORE_ACCOUNT_ALREADY_HAVE_PURCHASE = 9,
        CUSTOMER_FORWARDED = 10,
        USER_CANCELED = 11,
        FAILED = 12,
        PENDING = 13
    }
}
//# sourceMappingURL=mobily-purchase-error.d.ts.map