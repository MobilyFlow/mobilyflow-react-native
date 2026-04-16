"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilySubscriptionGroup = void 0;
var _mobilyProduct = require("./mobily-product.js");
var _objectTransformer = require("../../utils/object-transformer.js");
class MobilySubscriptionGroup {
  static parseFromAPI(obj) {
    obj.Products ??= [];
    return (0, _objectTransformer.objectTransformer)(obj, {
      nullIfUndefined: ['extras'],
      mapping: {
        Products: _mobilyProduct.MobilyProduct.parseFromAPI
      }
    });
  }
}
exports.MobilySubscriptionGroup = MobilySubscriptionGroup;
//# sourceMappingURL=mobily-subscription-group.js.map