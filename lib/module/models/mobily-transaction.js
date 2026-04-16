"use strict";

import { objectTransformer } from "../utils/object-transformer.js";
export class MobilyTransaction {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      nullIfUndefined: ['platformTxOriginalId', 'subscriptionId', 'itemId', 'productOfferId', 'startDate', 'endDate', 'refundDate'],
      dates: ['createdAt', 'updatedAt', 'startDate', 'endDate', 'refundDate']
    });
  }
}
//# sourceMappingURL=mobily-transaction.js.map