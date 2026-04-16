import { MobilyProduct } from './mobily-product';
export declare class MobilySubscriptionGroup {
    id: string;
    identifier: string;
    referenceName: string;
    name: string;
    description: string;
    extras: any | null;
    Products: MobilyProduct[];
    static parseFromAPI(obj: MobilySubscriptionGroup): MobilySubscriptionGroup;
}
//# sourceMappingURL=mobily-subscription-group.d.ts.map