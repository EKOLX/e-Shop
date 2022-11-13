import { useLayoutEffect, useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { AppState } from "../store/AppState";
import { sumPricesOfCart } from "../utils";
import { CustomerDrawerScreenProps } from "../models/types/navigation";
import Cart from "../models/data/Cart";
import Input from "../components/UI/Input";
import CartHeaderButton from "../components/navigation/CartHeaderButton";

export default function CartScreen(props: CustomerDrawerScreenProps<"Cart">) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const carts = useSelector((state: AppState) => state.cart.carts);

  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <CartHeaderButton tintColor={tintColor} {...props} onPress={checkout} />
      ),
    });
  }, [firstName, lastName, email]);

  const checkout = () => {
    console.log("checkout", firstName, lastName, email);
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

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Checkout the cart</Text>
          <Text style={styles.headerText}>
            ${sumPricesOfCart(carts).toFixed(2)}
          </Text>
        </View>

        <Input
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Input
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <FlatList
        data={carts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.product.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    marginBottom: 22,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 22,
    marginBottom: 6,
  },
  input: {
    marginBottom: 6,
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
