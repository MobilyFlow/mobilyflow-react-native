"use strict";

import { objectTransformer } from "../utils/object-transformer.js";
import { MobilyCustomer, MobilyProduct, MobilySubscriptionOffer } from 'mobilyflow-react-native-sdk';
import { MobilyTransaction } from "./mobily-transaction.js";
import { MobilySubscription } from "./entitlement/mobily-subscription.js";
import { MobilyItem } from "./entitlement/mobily-item.js";
export class MobilyEvent {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      nullIfUndefined: ['transactionId', 'subscriptionId', 'itemId', 'customerId', 'extras', 'Customer', 'Product', 'ProductOffer', 'Subscription', 'Item'],
      dates: ['createdAt', 'updatedAt'],
      mapping: {
        Customer: MobilyCustomer.parseFromAPI,
        Product: MobilyProduct.parseFromAPI,
        ProductOffer: MobilySubscriptionOffer.parseFromAPI,
        Transaction: MobilyTransaction.parseFromAPI,
        Subscription: MobilySubscription.parseFromAPI,
        Item: MobilyItem.parseFromAPI
      }
    });
  }
}
//# sourceMappingURL=mobily-event.js.map