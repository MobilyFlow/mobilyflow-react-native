"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyTransaction = void 0;
var _objectTransformer = require("../utils/object-transformer.js");
class MobilyTransaction {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      nullIfUndefined: ['platformTxOriginalId', 'subscriptionId', 'itemId', 'productOfferId', 'startDate', 'endDate', 'refundDate'],
      dates: ['createdAt', 'updatedAt', 'startDate', 'endDate', 'refundDate']
    });
  }
}
exports.MobilyTransaction = MobilyTransaction;
//# sourceMappingURL=mobily-transaction.js.map