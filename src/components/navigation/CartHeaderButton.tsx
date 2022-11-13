import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CustomerDrawerScreenProps } from "../../models/types/navigation";

interface CartHeaderButtonProps extends CustomerDrawerScreenProps<"Cart"> {
  tintColor?: string;
  onPress: () => void;
}

const CartHeaderButton: FC<CartHeaderButtonProps> = ({
  tintColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="card-outline" size={26} color={tintColor} />
    </TouchableOpacity>
  );
};

export default CartHeaderButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});
