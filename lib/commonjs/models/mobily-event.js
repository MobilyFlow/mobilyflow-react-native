"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyEvent = void 0;
var _objectTransformer = require("../utils/object-transformer.js");
var _mobilyflowReactNativeSdk = require("mobilyflow-react-native-sdk");
var _mobilyTransaction = require("./mobily-transaction.js");
var _mobilySubscription = require("./entitlement/mobily-subscription.js");
var _mobilyItem = require("./entitlement/mobily-item.js");
class MobilyEvent {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      nullIfUndefined: ['transactionId', 'subscriptionId', 'itemId', 'customerId', 'extras', 'Customer', 'Product', 'ProductOffer', 'Subscription', 'Item'],
      dates: ['createdAt', 'updatedAt'],
      mapping: {
        Customer: _mobilyflowReactNativeSdk.MobilyCustomer.parseFromAPI,
        Product: _mobilyflowReactNativeSdk.MobilyProduct.parseFromAPI,
        ProductOffer: _mobilyflowReactNativeSdk.MobilySubscriptionOffer.parseFromAPI,
        Transaction: _mobilyTransaction.MobilyTransaction.parseFromAPI,
        Subscription: _mobilySubscription.MobilySubscription.parseFromAPI,
        Item: _mobilyItem.MobilyItem.parseFromAPI
      }
    });
  }
}
exports.MobilyEvent = MobilyEvent;
//# sourceMappingURL=mobily-event.js.map