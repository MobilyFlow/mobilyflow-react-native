import { objectTransformer } from '../utils/object-transformer';
import { MobilyTransactionStatus } from '../enums/mobily-transaction-status';
import { MobilyCustomer, MobilyPlatform, MobilyStore } from 'mobilyflow-react-native-sdk';

export class MobilyTransaction {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  storeId: string;
  storeOriginalId: string | null;
  customerId: string;
  quantity: number;
  country: string;
  priceMillis: number;
  currency: string;
  convertedPriceMillis: number;
  convertedCurrency: string;
  status: MobilyTransactionStatus;
  refundedPercent: number;
  productId: string;
  subscriptionId: string | null;
  itemId: string | null;
  productOfferId: string | null;
  /** OS of the device the purchase was made on. */
  platform: MobilyPlatform;
  /** Store the purchase was made on. Null for purchases made before this field existed, until the backend backfill. */
  store: MobilyStore | null;
  startsAt: Date | null;
  endsAt: Date | null;
  refundedAt: Date | null;
  isSandbox: boolean;

  static parseFromAPI(obj: MobilyCustomer) {
    return objectTransformer(obj, {
      nullIfUndefined: [
        'store',
        'storeOriginalId',
        'subscriptionId',
        'itemId',
        'productOfferId',
        'startsAt',
        'endsAt',
        'refundedAt',
      ],
      dates: ['createdAt', 'updatedAt', 'startsAt', 'endsAt', 'refundedAt'],
    });
  }
}
