import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import { sumCartTotalPrice } from "../../utils";
import { RootStackScreenProps } from "../../models/types/navigation";
import Order from "../../models/data/Order";

export default function CartsScreen() {
  const orders = useSelector((state: AppState) => state.order.orders);

  const navigation =
    useNavigation<RootStackScreenProps<"Root">["navigation"]>();

  const renderOrder: ListRenderItem<Order> = ({ item: order }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CartDetails", { order })}
      >
        <Text>{order.id}</Text>
        <Text>
          {order.customer.firstName} {order.customer.lastName}
        </Text>
        <Text>{order.customer.email}</Text>
        <Text>${sumCartTotalPrice(order.items).toFixed(2)}</Text>
      </TouchableOpacity>
    );
  };

  if (orders.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Carts are empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id.toString()}
      />
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
