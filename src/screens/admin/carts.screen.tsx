import { useState } from "react";
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
import { RootDrawerScreenProps } from "../../models/types/navigation";
import Order from "../../models/data/Order";
import Cart from "../../models/data/Cart";
import ActivityIndicatorView from "../../components/UI/ActivityIndicatorView";
import Form from "../../components/ScreenSections/Cart/Form";

export default function CartsScreen(props: RootDrawerScreenProps<"Carts">) {
  const [loading, setLoading] = useState(false);

  const orders = useSelector((state: AppState) => state.order.orders);

  const renderOrder: ListRenderItem<Order> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.customer.firstName}</Text>
        <Text>{item.customer.lastName}</Text>
        <Text>{item.carts.length} items</Text>
      </View>
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
