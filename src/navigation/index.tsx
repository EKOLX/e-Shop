import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

import { AppState } from "../store/AppState";
import { useDataLoad } from "../hooks/useDataLoad";
import AuthScreen from "../screens/auth.screen";
import AdminProductScreen from "../screens/admin/product.screen";
import CustomerProductScreen from "../screens/customer/product.screen";
import CartScreen from "../screens/customer/cart.screen";
import ProductHeaderButton from "../components/Navigation/ProductHeaderButton";
import CustomDrawerContent from "../components/Navigation/CustomDrawerContent";
import {
  CustomerDrawerParamList,
  CustomerDrawerScreenProps,
} from "../models/types/navigation";
import User from "../models/data/User";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator<CustomerDrawerParamList>();

export default function Navigation() {
  const auth = useSelector((state: AppState) => state.auth);

  useDataLoad();

  return (
    <NavigationContainer>
      {auth.user ? <RootNavigator user={auth.user} /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const RootNavigator = ({ user }: { user: User }) => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{ headerTintColor: "black" }}
  >
    {user.role === "admin" ? (
      <Drawer.Group>
        <Drawer.Screen name="Products" component={AdminProductScreen} />
      </Drawer.Group>
    ) : (
      <Drawer.Group>
        <Drawer.Screen
          name="Products"
          component={CustomerProductScreen}
          options={(props: CustomerDrawerScreenProps<"Products">) => ({
            headerRight: ({ tintColor }) => (
              <ProductHeaderButton tintColor={tintColor} {...props} />
            ),
          })}
        />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Group>
    )}
  </Drawer.Navigator>
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
