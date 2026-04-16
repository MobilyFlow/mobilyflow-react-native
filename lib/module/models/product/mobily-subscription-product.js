"use strict";

import { MobilySubscriptionOffer } from "./mobily-subscription-offer.js";
import { objectTransformer } from "../../utils/object-transformer.js";
export class MobilySubscriptionProduct {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      nullIfUndefined: ['introductoryOffer', 'ios_groupId'],
      mapping: {
        introductoryOffer: MobilySubscriptionOffer.parseFromAPI,
        promotionalOffers: MobilySubscriptionOffer.parseFromAPI
      }
    });
  }
}
//# sourceMappingURL=mobily-subscription-product.js.map