"use strict";

import MobilyflowReactNativeSdk from "./NativeMobilyflowReactNativeSdk.js";
import { MobilyProduct } from "./models/product/mobily-product.js";
import { MobilySubscriptionGroup } from "./models/product/mobily-subscription-group.js";
import { MobilyCustomerEntitlement } from "./models/entitlement/mobily-customer-entitlement.js";
import { Platform as RNPlatform } from 'react-native';
import { MobilyError } from "./errors/mobily-error.js";
import { MobilyPurchaseError } from "./errors/mobily-purchase-error.js";
import { MobilyTransferOwnershipError } from "./errors/mobily-transfer-ownership-error.js";
import { MobilyCustomer } from "./models/mobily-customer.js";
function throwError(error) {
  if (RNPlatform.OS === 'android') {
    switch (error.name) {
      case 'com.mobilyflow.mobilypurchasesdk.Exceptions.MobilyException':
        return new MobilyError(parseInt(error.code, 10), error.message, error.nativeStackAndroid);
      case 'com.mobilyflow.mobilypurchasesdk.Exceptions.MobilyPurchaseException':
        return new MobilyPurchaseError(parseInt(error.code, 10), error.message, error.nativeStackAndroid);
      case 'com.mobilyflow.mobilypurchasesdk.Exceptions.MobilyTransferOwnershipException':
        return new MobilyTransferOwnershipError(parseInt(error.code, 10), error.message, error.nativeStackAndroid);
    }
  } else {
    switch (error.domain) {
      case 'MobilyflowSDK.MobilyError':
        return new MobilyError(parseInt(error.code, 10), error.message, error.nativeStackIOS);
      case 'MobilyflowSDK.MobilyPurchaseError':
        return new MobilyPurchaseError(parseInt(error.code, 10), error.message, error.nativeStackIOS);
      case 'MobilyflowSDK.MobilyTransferOwnershipError':
        return new MobilyTransferOwnershipError(parseInt(error.code, 10), error.message, error.nativeStackIOS);
    }
  }
  return error;
}
export const MobilyPurchaseSDK = {
  initialize: (appId, apiKey, environment, options) => {
    try {
      MobilyflowReactNativeSdk.initialize(appId, apiKey, environment, options ?? {});
    } catch (error) {
      throw throwError(error);
    }
  },
  close: () => {
    try {
      MobilyflowReactNativeSdk.close();
    } catch (error) {
      throw throwError(error);
    }
  },
  login: async externalRef => {
    try {
      const customer = await MobilyflowReactNativeSdk.login(externalRef);
      return MobilyCustomer.parseFromAPI(customer);
    } catch (error) {
      throw throwError(error);
    }
  },
  logout: () => {
    try {
      return MobilyflowReactNativeSdk.logout();
    } catch (error) {
      throw throwError(error);
    }
  },
  getProducts: async (identifiers, onlyAvailable = false) => {
    try {
      const products = await MobilyflowReactNativeSdk.getProducts(identifiers, onlyAvailable);
      return products.map(MobilyProduct.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  getSubscriptionGroups: async (identifiers, onlyAvailable = false) => {
    try {
      const groups = await MobilyflowReactNativeSdk.getSubscriptionGroups(identifiers, onlyAvailable);
      return groups.map(MobilySubscriptionGroup.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  getSubscriptionGroupById: async id => {
    try {
      const group = await MobilyflowReactNativeSdk.getSubscriptionGroupById(id);
      return MobilySubscriptionGroup.parseFromAPI(group);
    } catch (error) {
      throw throwError(error);
    }
  },
  getEntitlementForSubscription: async subscriptionGroupId => {
    try {
      const entitlement = await MobilyflowReactNativeSdk.getEntitlementForSubscription(subscriptionGroupId);
      return MobilyCustomerEntitlement.parseFromAPI(entitlement);
    } catch (error) {
      throw throwError(error);
    }
  },
  getEntitlement: async productId => {
    try {
      const entitlement = await MobilyflowReactNativeSdk.getEntitlement(productId);
      return MobilyCustomerEntitlement.parseFromAPI(entitlement);
    } catch (error) {
      throw throwError(error);
    }
  },
  getEntitlements: async productIds => {
    try {
      const entitlements = await MobilyflowReactNativeSdk.getEntitlements(productIds);
      return entitlements.map(MobilyCustomerEntitlement.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  getExternalEntitlements: async () => {
    try {
      const entitlements = await MobilyflowReactNativeSdk.getExternalEntitlements();
      return entitlements.map(MobilyCustomerEntitlement.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  requestTransferOwnership: async () => {
    try {
      return await MobilyflowReactNativeSdk.requestTransferOwnership();
    } catch (error) {
      throw throwError(error);
    }
  },
  openManageSubscription: async () => {
    try {
      return await MobilyflowReactNativeSdk.openManageSubscription();
    } catch (error) {
      throw throwError(error);
    }
  },
  openRefundDialogForProduct: async product => {
    if (RNPlatform.OS === 'android') {
      throw new Error('openRefundDialog not implemented on Android');
    } else {
      try {
        const result = await MobilyflowReactNativeSdk.openRefundDialogForProduct(product.id);
        return result;
      } catch (error) {
        throw throwError(error);
      }
    }
  },
  openRefundDialogForTransactionId: async transactionId => {
    if (RNPlatform.OS === 'android') {
      throw new Error('openRefundDialog not implemented on Android');
    } else {
      try {
        const result = await MobilyflowReactNativeSdk.openRefundDialogForTransactionId(transactionId);
        return result;
      } catch (error) {
        throw throwError(error);
      }
    }
  },
  purchaseProduct: async (product, options) => {
    try {
      return await MobilyflowReactNativeSdk.purchaseProduct(product.id, {
        offerId: options?.offer?.id || null,
        quantity: options?.quantity || null
      });
    } catch (error) {
      throw throwError(error);
    }
  },
  sendDiagnostic: async () => {
    try {
      return await MobilyflowReactNativeSdk.sendDiagnostic();
    } catch (error) {
      throw throwError(error);
    }
  },
  getStoreCountry: async () => {
    try {
      return await MobilyflowReactNativeSdk.getStoreCountry();
    } catch (error) {
      throw throwError(error);
    }
  },
  isBillingAvailable: async () => {
    try {
      return await MobilyflowReactNativeSdk.isBillingAvailable();
    } catch (error) {
      throw throwError(error);
    }
  },
  isForwardingEnable: async externalRef => {
    try {
      return await MobilyflowReactNativeSdk.isForwardingEnable(externalRef);
    } catch (error) {
      throw throwError(error);
    }
  },
  getCustomer: async () => {
    try {
      const customer = await MobilyflowReactNativeSdk.getCustomer();
      return MobilyCustomer.parseFromAPI(customer);
    } catch (error) {
      throw throwError(error);
    }
  },
  getSDKVersion: async () => {
    try {
      return await MobilyflowReactNativeSdk.getSDKVersion();
    } catch (error) {
      throw throwError(error);
    }
  }
};
//# sourceMappingURL=MobilyPurchaseSDK.js.map