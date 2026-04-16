import { MobilyProductType } from '../../enums/mobily-product-type';
import { MobilyProduct } from '../product/mobily-product';
import { MobilyItem } from './mobily-item';
import { MobilySubscription } from './mobily-subscription';
export declare class MobilyCustomerEntitlement {
    type: MobilyProductType;
    Product: MobilyProduct;
    Item: MobilyItem | null;
    Subscription: MobilySubscription | null;
    customerId: string;
    static parseFromAPI(obj: MobilyCustomerEntitlement): MobilyCustomerEntitlement;
}
//# sourceMappingURL=mobily-customer-entitlement.d.ts.map