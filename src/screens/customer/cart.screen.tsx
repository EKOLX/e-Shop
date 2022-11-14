import { useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import * as cartAction from "../../store/actions/cart.action";
import { sumCartTotalPrice } from "../../utils";
import { RootDrawerScreenProps } from "../../models/types/navigation";
import Form from "../../components/Screens/Cart/Form";
import CartList from "../../components/Common/CartList";
import HeaderButton from "../../components/UI/HeaderButton";
import ActivityIndicatorView from "../../components/UI/ActivityIndicatorView";

export default function CartScreen({
  navigation,
}: RootDrawerScreenProps<"Carts">) {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const carts = useSelector((state: AppState) => state.cart.items);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:
        carts.length > 0
          ? () => (
              <HeaderButton iconName="card-outline" onPress={onCheckoutPress} />
            )
          : undefined,
    });
  }, [carts, firstName, lastName, email]);

  const onCheckoutPress = async () => {
    if (!firstName || !lastName || !email) {
      Alert.alert("Some required information is missing.");
      return;
    }

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
        priceSum={sumCartTotalPrice(carts)}
        firstName={firstName}
        lastName={lastName}
        email={email}
        onFirstNameChange={setFirstName}
        onLastNameChange={setLastName}
        onEmailChange={setEmail}
      />

      <CartList data={carts} />

      <ActivityIndicatorView visible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
