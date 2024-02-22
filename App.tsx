import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from "./app/navigation/Navigation";


export default function App() {
  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
    }}>
      <Navigation/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}


