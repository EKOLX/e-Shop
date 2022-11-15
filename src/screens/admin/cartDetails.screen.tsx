import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { RootStackScreenProps } from "../../models/types/navigation";
import CartList from "../../components/Common/CartList";

export default function CartDetailsScreen({
  navigation,
  route,
}: RootStackScreenProps<"CartDetails">) {
  const {
    params: { order },
  } = route;

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Order №${order.id}` });
  }, [order]);

  return (
    <View style={styles.container}>
      <View style={styles.customer}>
        <Text>
          {order.customer.firstName} {order.customer.lastName}
        </Text>
        <Text>{order.customer.email}</Text>
      </View>

      <CartList data={order.items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  customer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },
});
