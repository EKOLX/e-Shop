import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { AppState } from "../store/AppState";

interface HeaderCartButtonProps {
  tintColor?: string;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = ({ tintColor }) => {
  const carts = useSelector((state: AppState) =>
    state.cart.carts.reduce((acc, curr) => acc + curr.quantity, 0)
  );

  return (
    <View style={styles.container}>
      <Ionicons name="cart-outline" size={29} color={tintColor} />
      <View style={styles.badge}>
        <Text style={{ color: "white", fontSize: 13 }}>{carts}</Text>
      </View>
    </View>
  );
};

export default HeaderCartButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "black",
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
