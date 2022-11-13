import { SafeAreaView } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch } from "react-redux";

import * as authAction from "../../store/actions/auth.action";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
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
