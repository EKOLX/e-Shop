import { StyleSheet, View } from "react-native";

import { RootStackScreenProps } from "../../models/types/navigation";
import CartList from "../../components/Common/CartList";

export default function CartDetailsScreen({
  route,
}: RootStackScreenProps<"CartDetails">) {
  return (
    <View style={styles.container}>
      <CartList data={route.params.items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
