"use strict";

export class MobilyTransferOwnershipError extends Error {
  constructor(type, message, nativeStack) {
    super(message);
    this.type = type;
    this.message = message;
    this.nativeStack = nativeStack;
  }
}
(function (_MobilyTransferOwnershipError) {
  let Type = /*#__PURE__*/function (Type) {
    Type[Type["NOTHING_TO_TRANSFER"] = 0] = "NOTHING_TO_TRANSFER";
    Type[Type["TRANSFER_TO_SAME_CUSTOMER"] = 1] = "TRANSFER_TO_SAME_CUSTOMER";
    Type[Type["ALREADY_PENDING"] = 2] = "ALREADY_PENDING";
    Type[Type["WEBHOOK_NOT_PROCESSED"] = 3] = "WEBHOOK_NOT_PROCESSED";
    Type[Type["WEBHOOK_FAILED"] = 4] = "WEBHOOK_FAILED";
    return Type;
  }({});
  _MobilyTransferOwnershipError.Type = Type;
})(MobilyTransferOwnershipError || (MobilyTransferOwnershipError = {}));
//# sourceMappingURL=mobily-transfer-ownership-error.js.map