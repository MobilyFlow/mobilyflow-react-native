"use strict";

export class MobilyError extends Error {
  constructor(type, message, nativeStack) {
    super(message);
    this.type = type;
    this.message = message;
    this.nativeStack = nativeStack;
  }
}
(function (_MobilyError) {
  let Type = /*#__PURE__*/function (Type) {
    Type[Type["STORE_UNAVAILABLE"] = 0] = "STORE_UNAVAILABLE";
    Type[Type["SERVER_UNAVAILABLE"] = 1] = "SERVER_UNAVAILABLE";
    Type[Type["NO_CUSTOMER_LOGGED"] = 2] = "NO_CUSTOMER_LOGGED";
    Type[Type["UNKNOWN_ERROR"] = 3] = "UNKNOWN_ERROR";
    return Type;
  }({});
  _MobilyError.Type = Type;
})(MobilyError || (MobilyError = {}));
//# sourceMappingURL=mobily-error.js.map