import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView className={'bg-lime-500'}>

      <View className={'bg-sky-400 mt-[50px]'}>
        <Text>Open up App.tsx to start working on your app!</Text>

      </View>

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
