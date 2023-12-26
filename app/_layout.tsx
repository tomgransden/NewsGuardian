import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#005689",
        },
        headerTintColor: "#fff",
        headerTitle: "News Guardian",
        headerBackTitle: "Back",
      }}
    />
  );
}
