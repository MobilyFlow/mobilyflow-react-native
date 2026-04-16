"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilySubscription = void 0;
var _mobilyflowReactNativeSdk = require("mobilyflow-react-native-sdk");
var _objectTransformer = require("../../utils/object-transformer.js");
class MobilySubscription {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      dates: ['createdAt', 'updatedAt', 'startDate', 'endDate', 'offerExpiryDate', 'resumeDate'],
      nullIfUndefined: ['productOfferId', 'renewProductId', 'renewProductOfferId', 'offerExpiryDate', 'resumeDate', 'lastPlatformTxOriginalId', 'Product', 'ProductOffer', 'RenewProduct', 'RenewProductOffer'],
      mapping: {
        Product: _mobilyflowReactNativeSdk.MobilyProduct.parseFromAPI,
        ProductOffer: _mobilyflowReactNativeSdk.MobilySubscriptionOffer.parseFromAPI,
        RenewProduct: _mobilyflowReactNativeSdk.MobilyProduct.parseFromAPI,
        RenewProductOffer: _mobilyflowReactNativeSdk.MobilySubscriptionOffer.parseFromAPI
      }
    });
  }
}
exports.MobilySubscription = MobilySubscription;
//# sourceMappingURL=mobily-subscription.js.map