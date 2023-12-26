import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "rgb(5, 41, 98)",
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonContainer: { position: "absolute", top: 8, right: 8 },
  description: { color: "#fff", textAlign: "center" }
});
