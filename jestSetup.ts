import "@testing-library/jest-native/extend-expect";

import "@shopify/flash-list/jestSetup";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
