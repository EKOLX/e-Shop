import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import { sumCartTotalPrice } from "../../utils";
import Order from "../../models/data/Order";

export default function CartsScreen() {
  const orders = useSelector((state: AppState) => state.order.orders);

  const renderOrder: ListRenderItem<Order> = ({ item: order }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text>{order.customer.firstName}</Text>
        <Text>{order.customer.lastName}</Text>
        <Text>{order.customer.email}</Text>
        <Text>${sumCartTotalPrice(order.items)}</Text>
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
