import { MobilyProduct } from 'mobilyflow-react-native-sdk';
export declare class MobilyItem {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    productId: string;
    quantity: number;
    Product: MobilyProduct | null;
    static parseFromAPI(obj: MobilyItem): MobilyItem;
}
//# sourceMappingURL=mobily-item.d.ts.map