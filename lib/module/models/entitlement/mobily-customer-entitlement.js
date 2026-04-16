"use strict";

import { MobilyProduct } from "../product/mobily-product.js";
import { objectTransformer } from "../../utils/object-transformer.js";
import { MobilyItem } from "./mobily-item.js";
import { MobilySubscription } from "./mobily-subscription.js";
export class MobilyCustomerEntitlement {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      nullIfUndefined: ['Item', 'Subscription'],
      mapping: {
        Product: MobilyProduct.parseFromAPI,
        Item: MobilyItem.parseFromAPI,
        Subscription: MobilySubscription.parseFromAPI
      }
    });
  }
}
//# sourceMappingURL=mobily-customer-entitlement.js.map