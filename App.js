import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const pos = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          width: '100%',
          height: pos == "landscape" ? '100%' : '30%',
          backgroundColor: 'dodgerblue',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});