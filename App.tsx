import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import Navigation from "./app/navigation/Navigation";
import {DataProvider} from "./app/context/DataContext";


export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{
        width: '100%',
        height: '100%',
      }}>
        <DataProvider>
          <Navigation/>
          <StatusBar style="auto" backgroundColor={'white'}/>
        </DataProvider>
      </SafeAreaView>
    </PaperProvider>
  );
}


