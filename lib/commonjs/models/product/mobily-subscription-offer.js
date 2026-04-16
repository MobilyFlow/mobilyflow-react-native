"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilySubscriptionOffer = void 0;
var _objectTransformer = require("../../utils/object-transformer.js");
class MobilySubscriptionOffer {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      nullIfUndefined: ['externalRef', 'ios_offerId', 'extras']
    });
  }
}
exports.MobilySubscriptionOffer = MobilySubscriptionOffer;
//# sourceMappingURL=mobily-subscription-offer.js.map