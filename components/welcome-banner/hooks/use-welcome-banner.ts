import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export const useWelcomeBanner = () => {
  const [isFirstTime, setIsFirstTime] = useState(false);

  const dismissWelcomeBanner = () => {
    setIsFirstTime(false);
    AsyncStorage.setItem("isFirstTime", "false");
  };

  useEffect(() => {
    AsyncStorage.getItem("isFirstTime").then((val) => {
      if (val === null) {
        setIsFirstTime(true);
      }
    });
  }, []);

  return { isFirstTime, dismissWelcomeBanner };
};
