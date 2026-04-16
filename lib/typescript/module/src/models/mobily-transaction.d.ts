import { MobilyTransactionStatus } from '../enums/mobily-transaction-status';
import { MobilyCustomer, MobilyPlatform } from 'mobilyflow-react-native-sdk';
export declare class MobilyTransaction {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    platformTxId: string;
    platformTxOriginalId: string | null;
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
    platform: MobilyPlatform;
    startDate: Date | null;
    endDate: Date | null;
    refundDate: Date | null;
    isSandbox: boolean;
    static parseFromAPI(obj: MobilyCustomer): MobilyCustomer;
}
//# sourceMappingURL=mobily-transaction.d.ts.map