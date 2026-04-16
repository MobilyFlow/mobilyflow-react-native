"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyPurchaseError = void 0;
class MobilyPurchaseError extends Error {
  constructor(type, message, nativeStack) {
    super(message);
    this.type = type;
    this.message = message;
    this.nativeStack = nativeStack;
  }
}
exports.MobilyPurchaseError = MobilyPurchaseError;
(function (_MobilyPurchaseError) {
  let Type = /*#__PURE__*/function (Type) {
    Type[Type["PURCHASE_ALREADY_PENDING"] = 0] = "PURCHASE_ALREADY_PENDING";
    Type[Type["PRODUCT_UNAVAILABLE"] = 1] = "PRODUCT_UNAVAILABLE";
    Type[Type["NETWORK_UNAVAILABLE"] = 2] = "NETWORK_UNAVAILABLE";
    Type[Type["BILLING_ISSUE"] = 3] = "BILLING_ISSUE";
    Type[Type["WEBHOOK_FAILED"] = 4] = "WEBHOOK_FAILED";
    Type[Type["WEBHOOK_NOT_PROCESSED"] = 5] = "WEBHOOK_NOT_PROCESSED";
    Type[Type["ALREADY_PURCHASED"] = 6] = "ALREADY_PURCHASED";
    Type[Type["RENEW_ALREADY_ON_THIS_PLAN"] = 7] = "RENEW_ALREADY_ON_THIS_PLAN";
    Type[Type["NOT_MANAGED_BY_THIS_STORE_ACCOUNT"] = 8] = "NOT_MANAGED_BY_THIS_STORE_ACCOUNT";
    Type[Type["STORE_ACCOUNT_ALREADY_HAVE_PURCHASE"] = 9] = "STORE_ACCOUNT_ALREADY_HAVE_PURCHASE";
    Type[Type["CUSTOMER_FORWARDED"] = 10] = "CUSTOMER_FORWARDED";
    Type[Type["USER_CANCELED"] = 11] = "USER_CANCELED";
    Type[Type["FAILED"] = 12] = "FAILED";
    Type[Type["PENDING"] = 13] = "PENDING";
    return Type;
  }({});
  _MobilyPurchaseError.Type = Type;
})(MobilyPurchaseError || (exports.MobilyPurchaseError = MobilyPurchaseError = {}));
//# sourceMappingURL=mobily-purchase-error.js.map