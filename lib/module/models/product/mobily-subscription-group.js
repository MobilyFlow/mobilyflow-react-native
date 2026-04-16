"use strict";

import { MobilyProduct } from "./mobily-product.js";
import { objectTransformer } from "../../utils/object-transformer.js";
export class MobilySubscriptionGroup {
  static parseFromAPI(obj) {
    obj.Products ??= [];
    return objectTransformer(obj, {
      nullIfUndefined: ['extras'],
      mapping: {
        Products: MobilyProduct.parseFromAPI
      }
    });
  }
}
//# sourceMappingURL=mobily-subscription-group.js.map