import { TouchableOpacity, View, Text } from "react-native";
import { AnimatePresence, MotiView } from "moti";
import { styles } from "./welcome-banner.style";

import { AntDesign } from "@expo/vector-icons";
import { useWelcomeBanner } from "./hooks/use-welcome-banner";

const animationOpacityZero = {opacity: 0};
const animationOpacityOne = {opacity: 1};

export const WelcomeBanner = () => {
  const { isFirstTime, dismissWelcomeBanner } = useWelcomeBanner();

  return (
    <AnimatePresence>
      {isFirstTime ? (
        <MotiView
          from={animationOpacityZero}
          animate={animationOpacityOne}
          exit={animationOpacityZero}
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
              style={styles.buttonContainer}
              onPress={dismissWelcomeBanner}
              hitSlop={48}
            >
              <AntDesign color={"#fff"} size={32} name="close" />
            </TouchableOpacity>

            <Text accessible={false} style={styles.text}>
              Welcome
            </Text>
            <Text
              accessible={false}
              importantForAccessibility="no"
              style={styles.description}
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
