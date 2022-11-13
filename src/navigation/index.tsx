import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

import { AppState } from "../store/AppState";
import { useDataLoad } from "../hooks/useDataLoad";
import AuthScreen from "../screens/auth.screen";
import ProductScreen from "../screens/product.screen";
import CartScreen from "../screens/cart.screen";
import HeaderCartButton from "../components/navigation/HeaderCartButton";
import CustomDrawerContent from "../components/navigation/CustomDrawerContent";
import {
  CustomerDrawerParamList,
  CustomerDrawerScreenProps,
} from "../models/types/navigation";

const Stack = createNativeStackNavigator();
const CustomerDrawer = createDrawerNavigator<CustomerDrawerParamList>();

export default function Navigation() {
  const auth = useSelector((state: AppState) => state.auth);

  useDataLoad();

  return (
    <NavigationContainer>
      {auth.user ? <CustomerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const CustomerNavigator = () => (
  <CustomerDrawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <CustomerDrawer.Screen
      name="Products"
      component={ProductScreen}
      options={(props: CustomerDrawerScreenProps<"Products">) => ({
        headerTintColor: "black",
        headerRight: ({ tintColor }) => (
          <HeaderCartButton tintColor={tintColor} {...props} />
        ),
      })}
    />
    <CustomerDrawer.Screen name="Cart" component={CartScreen} />
  </CustomerDrawer.Navigator>
);

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Auth"
      component={AuthScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
