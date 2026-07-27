import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});