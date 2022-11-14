import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import { sumCartTotalQuantity } from "../../utils";
import { RootDrawerScreenProps } from "../../models/types/navigation";

interface ProductHeaderButtonProps extends RootDrawerScreenProps<"Products"> {
  tintColor?: string;
}

const ProductHeaderButton: FC<ProductHeaderButtonProps> = ({
  tintColor,
  navigation,
}) => {
  const cartItems = useSelector((state: AppState) => state.cart.items);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Carts")}
    >
      <Ionicons name="cart-outline" size={29} color={tintColor} />
      <View style={styles.badge}>
        <Text style={{ color: "white", fontSize: 13 }}>
          {sumCartTotalQuantity(cartItems)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductHeaderButton;

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
