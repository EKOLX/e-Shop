import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AuthScreen from "../screens/auth.screen";
import ProductScreen from "../screens/product.screen";
import CartScreen from "../screens/cart.screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation() {
  let isAuth = true;

  return (
    <NavigationContainer>
      {isAuth ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={ProductScreen} />
          <Drawer.Screen name="Cart" component={CartScreen} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
