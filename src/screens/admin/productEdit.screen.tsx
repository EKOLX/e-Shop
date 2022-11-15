import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import * as productAction from "../../store/actions/product.action";
import { RootStackScreenProps } from "../../models/types/navigation";
import HeaderButton from "../../components/UI/HeaderButton";
import Input from "../../components/UI/Input";
import ActivityIndicatorView from "../../components/UI/ActivityIndicatorView";

export default function ProductEditScreen({
  navigation,
  route,
}: RootStackScreenProps<"ProductEdit">) {
  const [loading, setLoading] = useState(false);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const {
    params: { product },
  } = route;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton iconName="save-outline" onPress={onSavePress} />
      ),
    });
  }, [sku, name, description, price]);

  useEffect(() => {
    setSku(product.sku);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price.toString());
  }, [product]);

  const onSavePress = async () => {
    setLoading(true);
    await dispatch(
      productAction.update({
        ...product,
        sku,
        name,
        description,
        price: Number(price),
      })
    );
    setLoading(false);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="SKU"
        value={sku}
        onChangeText={setSku}
      />
      <Input
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Input
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Input
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="decimal-pad"
        onChangeText={setPrice}
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
  input: {
    marginBottom: 6,
  },
});
