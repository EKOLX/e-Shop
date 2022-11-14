import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "../../UI/Input";

interface FormProps {
  priceSum: number;
  firstName: string;
  lastName: string;
  email: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

const Form: FC<FormProps> = ({
  priceSum,
  firstName,
  lastName,
  email,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Checkout the cart</Text>
        <Text style={styles.headerText}>${priceSum.toFixed(2)}</Text>
      </View>

      <Input
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={onFirstNameChange}
      />
      <Input
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={onLastNameChange}
      />
      <Input
        style={styles.input}
        placeholder="Email Address"
        value={email}
        autoCapitalize="none"
        onChangeText={onEmailChange}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 22,
    marginBottom: 6,
  },
  input: {
    marginBottom: 6,
  },
});
