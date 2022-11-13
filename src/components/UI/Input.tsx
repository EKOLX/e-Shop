import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type InputProps = TextInput["props"];

const Input: FC<InputProps> = (props) => {
  const { style, ...otherProps } = props;

  return (
    <TextInput
      style={[styles.container, style]}
      placeholder="username"
      {...otherProps}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 6,
  },
});
