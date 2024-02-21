import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from "./app/navigation/Navigation";

export default function App() {
  return (
    <SafeAreaView className={'bg-lime-500'}>
      <Navigation/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
