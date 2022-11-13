import { useLayoutEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import * as cartAction from "../../store/actions/cart.action";
import { sumPricesOfCart } from "../../utils";
import { CustomerDrawerScreenProps } from "../../models/types/navigation";
import Cart from "../../models/data/Cart";
import CartHeaderButton from "../../components/Navigation/CartHeaderButton";
import ActivityIndicatorView from "../../components/UI/ActivityIndicatorView";
import Form from "../../components/ScreenSections/Cart/Form";

export default function CartScreen(props: CustomerDrawerScreenProps<"Cart">) {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const carts = useSelector((state: AppState) => state.cart.carts);

  const { navigation } = props;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:
        carts.length > 0
          ? ({ tintColor }) => (
              <CartHeaderButton
                tintColor={tintColor}
                {...props}
                onPress={checkout}
              />
            )
          : undefined,
    });
  }, [carts, firstName, lastName, email]);

  const checkout = async () => {
    setLoading(true);
    await dispatch(cartAction.checkout({ firstName, lastName, email }));
    clearInputs();
    setLoading(false);

    Alert.alert("Congratulations!", "Your order has been completed.", [
      {
        text: "Done",
        onPress: () => navigation.navigate("Products"),
      },
    ]);
  };

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const renderProduct: ListRenderItem<Cart> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.product.name}</Text>
        <Text>${item.product.price}</Text>
        <Text>{item.quantity} qty.</Text>
      </View>
    );
  };

  if (carts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Cart is empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Form
        priceSum={sumPricesOfCart(carts)}
        firstName={firstName}
        lastName={lastName}
        email={email}
        onFirstNameChange={setFirstName}
        onLastNameChange={setLastName}
        onEmailChange={setEmail}
      />

      <FlatList
        data={carts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.product.id.toString()}
      />

      <ActivityIndicatorView visible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 6,
  },
});
