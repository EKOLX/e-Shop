import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import Navigation from "./src/navigation";
import configureStore from "./src/store/configureStore";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
