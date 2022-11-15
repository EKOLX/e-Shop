import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";

import App from "../../../App";
import configureStore from "../../store/configureStore";
import AuthScreen from "../auth.screen";

describe("<AuthScreen />", () => {
  it("should navigate to admin <ProductsScreen /> when authenticated user is admin", async () => {
    const appScreen = render(<App />);
    const authScreen = render(
      <Provider store={configureStore()}>
        <AuthScreen />
      </Provider>
    );

    const usernameInput = authScreen.getByTestId("usernameInput");
    const passwordInput = authScreen.getByTestId("passwordInput");
    const authButton = authScreen.getByTestId("authButton");

    fireEvent.changeText(usernameInput, "admin");
    fireEvent.changeText(passwordInput, "admin");
    fireEvent.press(authButton);

    waitFor(() => {
      expect(appScreen.getByTestId("adminContainer")).toBeTruthy();
    });
  });

  it("should navigate to customer <ProductsScreen /> when authenticated user is customer", async () => {
    const appScreen = render(<App />);
    const authScreen = render(
      <Provider store={configureStore()}>
        <AuthScreen />
      </Provider>
    );

    const usernameInput = authScreen.getByTestId("usernameInput");
    const passwordInput = authScreen.getByTestId("passwordInput");
    const authButton = authScreen.getByTestId("authButton");

    fireEvent.changeText(usernameInput, "customer_1");
    fireEvent.changeText(passwordInput, "customer");
    fireEvent.press(authButton);

    waitFor(() => {
      expect(appScreen.getByTestId("customerContainer")).toBeTruthy();
    });
  });
});
