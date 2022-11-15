import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../store/AppState";
import * as authAction from "../store/actions/auth.action";
import Input from "../components/UI/Input";

export default function AuthScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { inProgress, errorMessage } = useSelector(
    (state: AppState) => state.auth
  );

  const dispatch = useDispatch();

  const onSignInPress = () => {
    dispatch(authAction.signIn(username, password));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome</Text>

        <View style={styles.inputsSection}>
          <Input
            style={styles.input}
            placeholder="username"
            autoCapitalize="none"
            testID="usernameInput"
            value={username}
            onChangeText={setUsername}
          />
          <Input
            style={styles.input}
            placeholder="password"
            secureTextEntry
            testID="passwordInput"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {inProgress && <Text style={{ color: "blue" }}>in progress ...</Text>}
        {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}

        <TouchableOpacity
          style={styles.button}
          testID="authButton"
          onPress={onSignInPress}
          disabled={inProgress}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 22,
  },
  inputsSection: {
    width: "73%",
  },
  input: {
    marginBottom: 6,
  },
  button: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
