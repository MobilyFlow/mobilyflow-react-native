"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyItem = void 0;
var _mobilyflowReactNativeSdk = require("mobilyflow-react-native-sdk");
var _objectTransformer = require("../../utils/object-transformer.js");
class MobilyItem {
  static parseFromAPI(obj) {
    return (0, _objectTransformer.objectTransformer)(obj, {
      dates: ['createdAt', 'updatedAt'],
      nullIfUndefined: ['Product'],
      mapping: {
        Product: _mobilyflowReactNativeSdk.MobilyProduct.parseFromAPI
      }
    });
  }
}
exports.MobilyItem = MobilyItem;
//# sourceMappingURL=mobily-item.js.map