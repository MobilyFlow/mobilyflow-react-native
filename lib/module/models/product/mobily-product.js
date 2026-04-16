"use strict";

import { MobilyOneTimeProduct } from "./mobily-one-time-product.js";
import { MobilySubscriptionProduct } from "./mobily-subscription-product.js";
import { objectTransformer } from "../../utils/object-transformer.js";
export class MobilyProduct {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      dates: ['createdAt', 'updatedAt'],
      nullIfUndefined: ['externalRef', 'android_sku', 'android_basePlanId', 'ios_sku', 'extras', 'oneTime', 'subscription'],
      mapping: {
        oneTime: MobilyOneTimeProduct.parseFromAPI,
        subscription: MobilySubscriptionProduct.parseFromAPI
      }
    });
  }
}
//# sourceMappingURL=mobily-product.js.map