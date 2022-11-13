import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { RootStackScreenProps } from "../../models/types/navigation";

export default function ProductEditScreen({
  navigation,
}: RootStackScreenProps<"ProductDetails">) {
  return (
    <View>
      <Text>ProductEditScreen</Text>
    </View>
  );
}
