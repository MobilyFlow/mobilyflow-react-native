"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyCustomerEntitlement = void 0;
var _mobilyProduct = require("../product/mobily-product.js");
var _objectTransformer = require("../../utils/object-transformer.js");
var _mobilyItem = require("./mobily-item.js");
var _mobilySubscription = require("./mobily-subscription.js");
class MobilyCustomerEntitlement {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      nullIfUndefined: ['Item', 'Subscription'],
      mapping: {
        Product: _mobilyProduct.MobilyProduct.parseFromAPI,
        Item: _mobilyItem.MobilyItem.parseFromAPI,
        Subscription: _mobilySubscription.MobilySubscription.parseFromAPI
      }
    });
  }
}
exports.MobilyCustomerEntitlement = MobilyCustomerEntitlement;
//# sourceMappingURL=mobily-customer-entitlement.js.map