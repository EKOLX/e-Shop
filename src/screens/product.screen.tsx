import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";

export default function ProductScreen() {
  const user = useSelector((state: AppState) => state.auth.user);
  console.log("user", user);
  return (
    <View>
      <Text>Product Screen</Text>
    </View>
  );
}
