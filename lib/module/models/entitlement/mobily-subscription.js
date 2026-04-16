"use strict";

import { MobilyProduct, MobilySubscriptionOffer } from 'mobilyflow-react-native-sdk';
import { objectTransformer } from "../../utils/object-transformer.js";
export class MobilySubscription {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      dates: ['createdAt', 'updatedAt', 'startDate', 'endDate', 'offerExpiryDate', 'resumeDate'],
      nullIfUndefined: ['productOfferId', 'renewProductId', 'renewProductOfferId', 'offerExpiryDate', 'resumeDate', 'lastPlatformTxOriginalId', 'Product', 'ProductOffer', 'RenewProduct', 'RenewProductOffer'],
      mapping: {
        Product: MobilyProduct.parseFromAPI,
        ProductOffer: MobilySubscriptionOffer.parseFromAPI,
        RenewProduct: MobilyProduct.parseFromAPI,
        RenewProductOffer: MobilySubscriptionOffer.parseFromAPI
      }
    });
  }
}
//# sourceMappingURL=mobily-subscription.js.map