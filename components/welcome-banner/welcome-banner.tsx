import { TouchableOpacity, View, Text } from "react-native";
import { AnimatePresence, MotiView } from "moti";
import { styles } from "./welcome-banner.style";

import { AntDesign } from "@expo/vector-icons";
import { useWelcomeBanner } from "./hooks/use-welcome-banner";

export const WelcomeBanner = () => {
  const { isFirstTime, dismissWelcomeBanner } = useWelcomeBanner();

  return (
    <AnimatePresence>
      {isFirstTime ? (
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            // default settings for all style values
            type: "timing",
            duration: 500,
          }}
        >
          <View
            style={styles.container}
            accessibilityLabel="Welcome to News Guardian message"
          >
            <TouchableOpacity
              accessible
              accessibilityRole="button"
              accessibilityLabel="Welcome to News Guardian. Press to dismiss this alert."
              style={{ position: "absolute", top: 8, right: 8 }}
              onPress={dismissWelcomeBanner}
            >
              <AntDesign color={"#fff"} size={48} name="close" />
            </TouchableOpacity>

            <Text accessible={false} style={styles.text}>
              Welcome
            </Text>
            <Text
              accessible={false}
              importantForAccessibility="no"
              style={{ color: "#fff", textAlign: "center" }}
            >
              Click a tile below to read the news article, and press the close
              button to hide this notifications
            </Text>
          </View>
        </MotiView>
      ) : null}
      ;
    </AnimatePresence>
  );
};
