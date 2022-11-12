import {
  ListRenderItem,
  FlatList,
  View,
  Text,
  Dimensions,
  PixelRatio,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

import { AppState } from "../store/AppState";
import Product from "../models/Product";

const screen = Dimensions.get("window");
const screenPadding = 16;
const columnCount = 2;
const itemSize = PixelRatio.roundToNearestPixel(
  (screen.width - screenPadding * (columnCount + 1)) / columnCount
);

export default function ProductScreen() {
  const products = useSelector((state: AppState) => state.product.products);

  const renderProduct: ListRenderItem<Product> = ({ item: product }) => {
    return (
      <View style={styles.item}>
        <Text style={{ fontWeight: "600" }}>{product.name}</Text>
        <Text>{product.sku}</Text>
        <Text>{product.description}</Text>
        <Text>${product.price}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        numColumns={columnCount}
        columnWrapperStyle={{
          marginBottom: screenPadding,
          justifyContent: "space-between",
        }}
        contentContainerStyle={{ padding: screenPadding }}
        data={products}
        renderItem={renderProduct}
        keyExtractor={(product) => product.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    width: itemSize,
    alignItems: "center",
    padding: 6,
    borderRadius: 6,
  },
});
