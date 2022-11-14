import { FC } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

import CartItem from "../../models/data/CartItem";

interface CartListProps {
  data: Array<CartItem>;
}

const CartList: FC<CartListProps> = ({ data }) => {
  const renderProduct: ListRenderItem<CartItem> = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>{item.product.name}</Text>
        <Text>{item.quantity} qty.</Text>
        <Text>${item.product.price}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderProduct}
      keyExtractor={(item) => item.product.id.toString()}
    />
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 6,
  },
});
