"use strict";

import { objectTransformer } from "../../utils/object-transformer.js";
export class MobilySubscriptionOffer {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      nullIfUndefined: ['externalRef', 'ios_offerId', 'extras']
    });
  }
}
//# sourceMappingURL=mobily-subscription-offer.js.map