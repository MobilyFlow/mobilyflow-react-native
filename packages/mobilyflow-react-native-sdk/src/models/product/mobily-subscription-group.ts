import { MobilyProduct } from './mobily-product';
import { objectTransformer } from '../../utils/object-transformer';

export class MobilySubscriptionGroup {
  id: string;
  identifier: string;
  referenceName: string;
  name: string;
  description: string;
  metadata: any | null;
  Products: MobilyProduct[];

  static parseFromAPI(obj: MobilySubscriptionGroup) {
    obj.Products ??= [];
    return objectTransformer(obj, {
      nullIfUndefined: ['metadata'],
      mapping: {
        Products: MobilyProduct.parseFromAPI,
      },
    });
  }
}
