import {
  render,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react-native";
import { WelcomeBanner } from "./welcome-banner";

import AsyncStorage from "@react-native-async-storage/async-storage";

jest
  .spyOn(AsyncStorage, "getItem")
  .mockResolvedValueOnce(null)
  .mockResolvedValueOnce(null)
  .mockResolvedValueOnce("false");

describe("Welcome Banner", () => {
  it("renders if value not in AsyncStorage", async () => {
    render(<WelcomeBanner />);

    await waitFor(() => expect(screen.getByRole("button")).toBeOnTheScreen());
  });

  it("closes the banner when pressing the close button", async () => {
    render(<WelcomeBanner />);

    fireEvent.press(await screen.findByRole("button"));

    expect(AsyncStorage.setItem).toHaveBeenCalledWith("isFirstTime", "false");

    await waitFor(() =>
      expect(screen.queryByRole("button")).not.toBeOnTheScreen()
    );
  });

  it("renders nothing if value is in AsyncStorage", async () => {
    render(<WelcomeBanner />);

    await waitFor(() =>
      expect(screen.queryByRole("button")).not.toBeOnTheScreen()
    );
  });
});
