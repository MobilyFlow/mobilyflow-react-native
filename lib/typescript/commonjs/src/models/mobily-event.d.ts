import { MobilyCustomer, MobilyPlatform, MobilyProduct, MobilySubscriptionOffer } from 'mobilyflow-react-native-sdk';
import { MobilyEventType } from '../enums/mobily-event-type';
import { MobilyTransaction } from './mobily-transaction';
import { MobilySubscription } from './entitlement/mobily-subscription';
import { MobilyItem } from './entitlement/mobily-item';
export declare class MobilyEvent {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    transactionId: string | null;
    subscriptionId: string | null;
    itemId: string | null;
    customerId: string | null;
    type: MobilyEventType;
    extras: any | null;
    platform: MobilyPlatform;
    isSandbox: boolean;
    Customer: MobilyCustomer | null;
    Product: MobilyProduct | null;
    ProductOffer: MobilySubscriptionOffer | null;
    Transaction: MobilyTransaction | null;
    Subscription: MobilySubscription | null;
    Item: MobilyItem | null;
    static parseFromAPI(obj: MobilyCustomer): MobilyCustomer;
}
//# sourceMappingURL=mobily-event.d.ts.map