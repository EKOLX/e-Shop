import { SafeAreaView } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { AppState } from "../../store/AppState";
import * as authAction from "../../store/actions/auth.action";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const user = useSelector((state: AppState) => state.auth.user);

  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerItem
          style={{ marginBottom: 22 }}
          label={user?.username ?? ""}
          icon={() => <Ionicons name="person-outline" size={22} />}
          onPress={() => {}}
        />
        <DrawerItemList {...props} />
        <DrawerItem
          style={{ marginTop: "auto" }}
          label="Sign Out"
          onPress={() => dispatch(authAction.signOut())}
        />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
