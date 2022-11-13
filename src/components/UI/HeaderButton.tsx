import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderButtonProps {
  iconName?: keyof typeof Ionicons.glyphMap;
  tintColor?: string;
  onPress: () => void;
}

const HeaderButton: FC<HeaderButtonProps> = ({
  iconName,
  tintColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={{ marginRight: 16 }} onPress={onPress}>
      <Ionicons name={iconName} size={26} color={tintColor} />
    </TouchableOpacity>
  );
};

export default HeaderButton;
