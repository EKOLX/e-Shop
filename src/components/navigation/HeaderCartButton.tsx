import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import { CustomerDrawerScreenProps } from "../../models/types/navigation";

interface HeaderCartButtonProps extends CustomerDrawerScreenProps<"Products"> {
  tintColor?: string;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = ({
  tintColor,
  navigation,
}) => {
  const carts = useSelector((state: AppState) =>
    state.cart.carts.reduce((acc, curr) => acc + curr.quantity, 0)
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Cart")}
    >
      <Ionicons name="cart-outline" size={29} color={tintColor} />
      <View style={styles.badge}>
        <Text style={{ color: "white", fontSize: 13 }}>{carts}</Text>
      </View>
    </TouchableOpacity>
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
