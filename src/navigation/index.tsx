import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

import { AppState } from "../store/AppState";
import { useStoreLoad } from "../hooks/useStoreLoad";
import AuthScreen from "../screens/auth.screen";
import AdminProductsScreen from "../screens/admin/products.screen";
import AdminProductEditScreen from "../screens/admin/productEdit.screen";
import AdminCartsScreen from "../screens/admin/carts.screen";
import CustomerProductsScreen from "../screens/customer/products.screen";
import CustomerCartScreen from "../screens/customer/cart.screen";
import ProductHeaderButton from "../components/Navigation/ProductHeaderButton";
import CustomDrawerContent from "../components/Navigation/CustomDrawerContent";
import {
  RootDrawerParamList,
  RootStackParamList,
} from "../models/types/navigation";
import User from "../models/data/User";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function Navigation() {
  const auth = useSelector((state: AppState) => state.auth);

  useStoreLoad();

  return (
    <NavigationContainer>
      {auth.user ? <RootNavigator user={auth.user} /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const RootNavigator = ({ user }: { user: User }) => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "black",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Root"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
    {user.role === "admin" ? (
      <Stack.Screen name="ProductDetails" component={AdminProductEditScreen} />
    ) : undefined}
  </Stack.Navigator>
);

const DrawerNavigator = () => {
  const auth = useSelector((state: AppState) => state.auth);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerTintColor: "black" }}
    >
      {auth.user?.role === "admin" ? (
        <Drawer.Group>
          <Drawer.Screen name="Products" component={AdminProductsScreen} />
          <Drawer.Screen name="Carts" component={AdminCartsScreen} />
        </Drawer.Group>
      ) : (
        <Drawer.Group>
          <Drawer.Screen
            name="Products"
            component={CustomerProductsScreen}
            options={(props) => ({
              headerRight: () => <ProductHeaderButton {...props} />,
            })}
          />
          <Drawer.Screen
            name="Carts"
            component={CustomerCartScreen}
            options={{ title: "Cart" }}
          />
        </Drawer.Group>
      )}
    </Drawer.Navigator>
  );
};

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Auth"
      component={AuthScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
