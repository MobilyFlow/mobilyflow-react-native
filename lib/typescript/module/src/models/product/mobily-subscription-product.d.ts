import { MobilySubscriptionOffer } from './mobily-subscription-offer';
import { PeriodUnit } from '../../enums/period-unit';
export declare class MobilySubscriptionProduct {
    periodCount: number;
    periodUnit: PeriodUnit;
    groupLevel: number;
    groupId: string;
    ios_groupId: string | null;
    introductoryOffer: MobilySubscriptionOffer | null;
    promotionalOffers: MobilySubscriptionOffer[];
    static parseFromAPI(obj: MobilySubscriptionProduct): MobilySubscriptionProduct;
}
//# sourceMappingURL=mobily-subscription-product.d.ts.map