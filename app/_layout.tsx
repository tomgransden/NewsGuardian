import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#005689",
        },
        headerTintColor: "#fff",
        headerTitle: "News Guardian",
      }}
    />
  );
}
