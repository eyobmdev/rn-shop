import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
