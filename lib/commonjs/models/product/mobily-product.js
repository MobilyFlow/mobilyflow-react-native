"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyProduct = void 0;
var _mobilyOneTimeProduct = require("./mobily-one-time-product.js");
var _mobilySubscriptionProduct = require("./mobily-subscription-product.js");
var _objectTransformer = require("../../utils/object-transformer.js");
class MobilyProduct {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      dates: ['createdAt', 'updatedAt'],
      nullIfUndefined: ['externalRef', 'android_sku', 'android_basePlanId', 'ios_sku', 'extras', 'oneTime', 'subscription'],
      mapping: {
        oneTime: _mobilyOneTimeProduct.MobilyOneTimeProduct.parseFromAPI,
        subscription: _mobilySubscriptionProduct.MobilySubscriptionProduct.parseFromAPI
      }
    });
  }
}
exports.MobilyProduct = MobilyProduct;
//# sourceMappingURL=mobily-product.js.map