import { MobilyPlatform, MobilyProduct, MobilySubscriptionOffer } from 'mobilyflow-react-native-sdk';
export declare class MobilySubscription {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    productId: string;
    productOfferId: string | null;
    startDate: Date;
    endDate: Date;
    platform: MobilyPlatform;
    renewProductId: string | null;
    renewProductOfferId: string | null;
    lastPriceMillis: number;
    regularPriceMillis: number;
    renewPriceMillis: number;
    currency: string;
    offerExpiryDate: Date | null;
    offerRemainingCycle: number;
    autoRenewEnable: boolean;
    isInGracePeriod: boolean;
    isInBillingIssue: boolean;
    hasPauseScheduled: boolean;
    isPaused: boolean;
    resumeDate: Date | null;
    isExpiredOrRevoked: boolean;
    isManagedByThisStoreAccount: boolean;
    lastPlatformTxOriginalId: string | null;
    Product: MobilyProduct | null;
    ProductOffer: MobilySubscriptionOffer | null;
    RenewProduct: MobilyProduct | null;
    RenewProductOffer: MobilySubscriptionOffer | null;
    static parseFromAPI(obj: MobilySubscription): MobilySubscription;
}
//# sourceMappingURL=mobily-subscription.d.ts.map