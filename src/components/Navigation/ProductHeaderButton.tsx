import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import { sumQuantitiesOfCart } from "../../utils";
import { CustomerDrawerScreenProps } from "../../models/types/navigation";

interface ProductHeaderButtonProps
  extends CustomerDrawerScreenProps<"Products"> {
  tintColor?: string;
}

const ProductHeaderButton: FC<ProductHeaderButtonProps> = ({
  tintColor,
  navigation,
}) => {
  const carts = useSelector((state: AppState) => state.cart.carts);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Cart")}
    >
      <Ionicons name="cart-outline" size={29} color={tintColor} />
      <View style={styles.badge}>
        <Text style={{ color: "white", fontSize: 13 }}>
          {sumQuantitiesOfCart(carts)}
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
