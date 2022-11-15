import {
  ListRenderItem,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import Product from "../../models/data/Product";
import { RootStackScreenProps } from "../../models/types/navigation";

export default function ProductsScreen() {
  const products = useSelector((state: AppState) => state.product.products);

  const navigation =
    useNavigation<RootStackScreenProps<"Root">["navigation"]>();

  const renderProduct: ListRenderItem<Product> = ({ item: product }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("ProductEdit", { product })}
      >
        <Text style={{ fontWeight: "600" }}>{product.name}</Text>
        <Text>{product.sku}</Text>
        <Text>{product.description}</Text>
        <Text>${product.price}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(product) => product.id.toString()}
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
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
    marginBottom: 6,
  },
});
