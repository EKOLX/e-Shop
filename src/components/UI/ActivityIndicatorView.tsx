import { FC } from "react";
import { ActivityIndicator, Modal, View } from "react-native";

interface ActivityIndicatorViewProps {
  visible: boolean;
}

const ActivityIndicatorView: FC<ActivityIndicatorViewProps> = ({ visible }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    </Modal>
  );
};

export default ActivityIndicatorView;
