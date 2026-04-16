"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobilyPurchaseSDK = void 0;
var _NativeMobilyflowReactNativeSdk = _interopRequireDefault(require("./NativeMobilyflowReactNativeSdk.js"));
var _mobilyProduct = require("./models/product/mobily-product.js");
var _mobilySubscriptionGroup = require("./models/product/mobily-subscription-group.js");
var _mobilyCustomerEntitlement = require("./models/entitlement/mobily-customer-entitlement.js");
var _reactNative = require("react-native");
var _mobilyError = require("./errors/mobily-error.js");
var _mobilyPurchaseError = require("./errors/mobily-purchase-error.js");
var _mobilyTransferOwnershipError = require("./errors/mobily-transfer-ownership-error.js");
var _mobilyCustomer = require("./models/mobily-customer.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function throwError(error) {
  if (_reactNative.Platform.OS === 'android') {
    switch (error.name) {
      case 'com.mobilyflow.mobilypurchasesdk.Exceptions.MobilyException':
        return new _mobilyError.MobilyError(parseInt(error.code, 10), error.message, error.nativeStackAndroid);
      case 'com.mobilyflow.mobilypurchasesdk.Exceptions.MobilyPurchaseException':
        return new _mobilyPurchaseError.MobilyPurchaseError(parseInt(error.code, 10), error.message, error.nativeStackAndroid);
      case 'com.mobilyflow.mobilypurchasesdk.Exceptions.MobilyTransferOwnershipException':
        return new _mobilyTransferOwnershipError.MobilyTransferOwnershipError(parseInt(error.code, 10), error.message, error.nativeStackAndroid);
    }
  } else {
    switch (error.domain) {
      case 'MobilyflowSDK.MobilyError':
        return new _mobilyError.MobilyError(parseInt(error.code, 10), error.message, error.nativeStackIOS);
      case 'MobilyflowSDK.MobilyPurchaseError':
        return new _mobilyPurchaseError.MobilyPurchaseError(parseInt(error.code, 10), error.message, error.nativeStackIOS);
      case 'MobilyflowSDK.MobilyTransferOwnershipError':
        return new _mobilyTransferOwnershipError.MobilyTransferOwnershipError(parseInt(error.code, 10), error.message, error.nativeStackIOS);
    }
  }
  return error;
}
const MobilyPurchaseSDK = exports.MobilyPurchaseSDK = {
  initialize: (appId, apiKey, environment, options) => {
    try {
      _NativeMobilyflowReactNativeSdk.default.initialize(appId, apiKey, environment, options ?? {});
    } catch (error) {
      throw throwError(error);
    }
  },
  close: () => {
    try {
      _NativeMobilyflowReactNativeSdk.default.close();
    } catch (error) {
      throw throwError(error);
    }
  },
  login: async externalRef => {
    try {
      const customer = await _NativeMobilyflowReactNativeSdk.default.login(externalRef);
      return _mobilyCustomer.MobilyCustomer.parseFromAPI(customer);
    } catch (error) {
      throw throwError(error);
    }
  },
  logout: () => {
    try {
      return _NativeMobilyflowReactNativeSdk.default.logout();
    } catch (error) {
      throw throwError(error);
    }
  },
  getProducts: async (identifiers, onlyAvailable = false) => {
    try {
      const products = await _NativeMobilyflowReactNativeSdk.default.getProducts(identifiers, onlyAvailable);
      return products.map(_mobilyProduct.MobilyProduct.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  getSubscriptionGroups: async (identifiers, onlyAvailable = false) => {
    try {
      const groups = await _NativeMobilyflowReactNativeSdk.default.getSubscriptionGroups(identifiers, onlyAvailable);
      return groups.map(_mobilySubscriptionGroup.MobilySubscriptionGroup.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  getSubscriptionGroupById: async id => {
    try {
      const group = await _NativeMobilyflowReactNativeSdk.default.getSubscriptionGroupById(id);
      return _mobilySubscriptionGroup.MobilySubscriptionGroup.parseFromAPI(group);
    } catch (error) {
      throw throwError(error);
    }
  },
  getEntitlementForSubscription: async subscriptionGroupId => {
    try {
      const entitlement = await _NativeMobilyflowReactNativeSdk.default.getEntitlementForSubscription(subscriptionGroupId);
      return _mobilyCustomerEntitlement.MobilyCustomerEntitlement.parseFromAPI(entitlement);
    } catch (error) {
      throw throwError(error);
    }
  },
  getEntitlement: async productId => {
    try {
      const entitlement = await _NativeMobilyflowReactNativeSdk.default.getEntitlement(productId);
      return _mobilyCustomerEntitlement.MobilyCustomerEntitlement.parseFromAPI(entitlement);
    } catch (error) {
      throw throwError(error);
    }
  },
  getEntitlements: async productIds => {
    try {
      const entitlements = await _NativeMobilyflowReactNativeSdk.default.getEntitlements(productIds);
      return entitlements.map(_mobilyCustomerEntitlement.MobilyCustomerEntitlement.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  getExternalEntitlements: async () => {
    try {
      const entitlements = await _NativeMobilyflowReactNativeSdk.default.getExternalEntitlements();
      return entitlements.map(_mobilyCustomerEntitlement.MobilyCustomerEntitlement.parseFromAPI);
    } catch (error) {
      throw throwError(error);
    }
  },
  requestTransferOwnership: async () => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.requestTransferOwnership();
    } catch (error) {
      throw throwError(error);
    }
  },
  openManageSubscription: async () => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.openManageSubscription();
    } catch (error) {
      throw throwError(error);
    }
  },
  openRefundDialogForProduct: async product => {
    if (_reactNative.Platform.OS === 'android') {
      throw new Error('openRefundDialog not implemented on Android');
    } else {
      try {
        const result = await _NativeMobilyflowReactNativeSdk.default.openRefundDialogForProduct(product.id);
        return result;
      } catch (error) {
        throw throwError(error);
      }
    }
  },
  openRefundDialogForTransactionId: async transactionId => {
    if (_reactNative.Platform.OS === 'android') {
      throw new Error('openRefundDialog not implemented on Android');
    } else {
      try {
        const result = await _NativeMobilyflowReactNativeSdk.default.openRefundDialogForTransactionId(transactionId);
        return result;
      } catch (error) {
        throw throwError(error);
      }
    }
  },
  purchaseProduct: async (product, options) => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.purchaseProduct(product.id, {
        offerId: options?.offer?.id || null,
        quantity: options?.quantity || null
      });
    } catch (error) {
      throw throwError(error);
    }
  },
  sendDiagnostic: async () => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.sendDiagnostic();
    } catch (error) {
      throw throwError(error);
    }
  },
  getStoreCountry: async () => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.getStoreCountry();
    } catch (error) {
      throw throwError(error);
    }
  },
  isBillingAvailable: async () => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.isBillingAvailable();
    } catch (error) {
      throw throwError(error);
    }
  },
  isForwardingEnable: async externalRef => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.isForwardingEnable(externalRef);
    } catch (error) {
      throw throwError(error);
    }
  },
  getCustomer: async () => {
    try {
      const customer = await _NativeMobilyflowReactNativeSdk.default.getCustomer();
      return _mobilyCustomer.MobilyCustomer.parseFromAPI(customer);
    } catch (error) {
      throw throwError(error);
    }
  },
  getSDKVersion: async () => {
    try {
      return await _NativeMobilyflowReactNativeSdk.default.getSDKVersion();
    } catch (error) {
      throw throwError(error);
    }
  }
};
//# sourceMappingURL=MobilyPurchaseSDK.js.map