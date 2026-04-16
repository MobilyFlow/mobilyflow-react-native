"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyCustomer = void 0;
var _objectTransformer = require("../utils/object-transformer.js");
class MobilyCustomer {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      dates: ['createdAt', 'updatedAt']
    });
  }
}
exports.MobilyCustomer = MobilyCustomer;
//# sourceMappingURL=mobily-customer.js.map