"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilySubscriptionProduct = void 0;
var _mobilySubscriptionOffer = require("./mobily-subscription-offer.js");
var _objectTransformer = require("../../utils/object-transformer.js");
class MobilySubscriptionProduct {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      nullIfUndefined: ['introductoryOffer', 'ios_groupId'],
      mapping: {
        introductoryOffer: _mobilySubscriptionOffer.MobilySubscriptionOffer.parseFromAPI,
        promotionalOffers: _mobilySubscriptionOffer.MobilySubscriptionOffer.parseFromAPI
      }
    });
  }
}
exports.MobilySubscriptionProduct = MobilySubscriptionProduct;
//# sourceMappingURL=mobily-subscription-product.js.map