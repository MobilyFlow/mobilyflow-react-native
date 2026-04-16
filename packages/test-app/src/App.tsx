import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigation/root.navigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatelessDialogProvider } from "@react-stateless-dialog/core";
import { ViewStyle } from "react-native";
import { statelessDialogConfig } from "./config/react-stateless-dialog";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { MobilyFlowService } from "./services/mobilyflow-service";
import { useMobilyflowStore } from "./stores/mobilyflow-store";
import { queryClient } from "./config/query-client";
import { MobilyPurchaseSDK } from "mobilyflow-react-native-sdk";

const SAFE_AREA: ViewStyle = { flex: 1, backgroundColor: "black" };

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        MobilyFlowService.init();
        await MobilyFlowService.login();
        useMobilyflowStore.setState({ isLoading: false, error: null });

        console.log("SubGroup (test_group_managed)");
        let group = await MobilyPurchaseSDK.getSubscriptionGroupById(
          "7169b477-c649-4981-91ef-f3c0d7fa64ca",
        );
        for (const product of group.Products) {
          console.log(`Product: ${product.identifier} / ${product.status}`);
        }
        console.log("===============");
      } catch (error) {
        console.error("AppInitError: ", error);
        useMobilyflowStore.setState({ isLoading: false, error });
      }
    })();

    return () => {
      MobilyFlowService.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={SAFE_AREA}>
          <NavigationContainer>
            <StatelessDialogProvider config={statelessDialogConfig}>
              <RootNavigator />
            </StatelessDialogProvider>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
