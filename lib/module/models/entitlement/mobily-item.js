"use strict";

import { MobilyProduct } from 'mobilyflow-react-native-sdk';
import { objectTransformer } from "../../utils/object-transformer.js";
export class MobilyItem {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      dates: ['createdAt', 'updatedAt'],
      nullIfUndefined: ['Product'],
      mapping: {
        Product: MobilyProduct.parseFromAPI
      }
    });
  }
}
//# sourceMappingURL=mobily-item.js.map