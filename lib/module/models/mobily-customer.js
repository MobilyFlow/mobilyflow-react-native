"use strict";

import { objectTransformer } from "../utils/object-transformer.js";
export class MobilyCustomer {
  static parseFromAPI(obj) {
    return objectTransformer(obj, {
      dates: ['createdAt', 'updatedAt']
    });
  }
}
//# sourceMappingURL=mobily-customer.js.map