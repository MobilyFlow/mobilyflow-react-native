import { MobilyPlatform, MobilyStore, MobilyProduct, MobilySubscriptionOffer } from 'mobilyflow-react-native-sdk';
import { objectTransformer } from '../../utils/object-transformer';

export class MobilySubscription {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  productId: string;
  productOfferId: string | null;
  startsAt: Date;
  endsAt: Date;
  /** OS of the device the purchase was made on. */
  platform: MobilyPlatform;
  /** Store the purchase was made on. Null for purchases made before this field existed, until the backend backfill. */
  store: MobilyStore | null;
  renewProductId: string | null;
  renewProductOfferId: string | null;
  lastPriceMillis: number;
  regularPriceMillis: number;
  renewPriceMillis: number;
  currency: string;
  offerExpiresAt: Date | null;
  offerRemainingCycle: number;
  isAutoRenewing: boolean;
  isInGracePeriod: boolean;
  isInBillingIssue: boolean;
  hasPauseScheduled: boolean;
  isPaused: boolean;
  resumesAt: Date | null;
  isExpiredOrRevoked: boolean;
  isManagedByThisStoreAccount: boolean;
  lastStoreOriginalTransactionId: string | null;
  Product: MobilyProduct | null;
  ProductOffer: MobilySubscriptionOffer | null;
  RenewProduct: MobilyProduct | null;
  RenewProductOffer: MobilySubscriptionOffer | null;

  static parseFromAPI(obj: MobilySubscription) {
    return objectTransformer(obj, {
      dates: ['createdAt', 'updatedAt', 'startsAt', 'endsAt', 'offerExpiresAt', 'resumesAt'],
      nullIfUndefined: [
        'store',
        'productOfferId',
        'renewProductId',
        'renewProductOfferId',
        'offerExpiresAt',
        'resumesAt',
        'lastStoreOriginalTransactionId',
        'Product',
        'ProductOffer',
        'RenewProduct',
        'RenewProductOffer',
      ],
      mapping: {
        Product: MobilyProduct.parseFromAPI,
        ProductOffer: MobilySubscriptionOffer.parseFromAPI,
        RenewProduct: MobilyProduct.parseFromAPI,
        RenewProductOffer: MobilySubscriptionOffer.parseFromAPI,
      },
    });
  }
}
