import React from "react";
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import Navigation from "./app/navigation/Navigation";
import {DataProvider} from "./app/context/DataContext";

export default function App() {

  return (
    <DataProvider>
      <PaperProvider>
        <SafeAreaView style={{
          width: '100%',
          height: '100%',
        }}>
          <Navigation/>
          {/*<StatusBar style="auto" backgroundColor={'white'}/>*/}
        </SafeAreaView>
      </PaperProvider>
    </DataProvider>
  );
}


// https://expo.dev/accounts/alinasyniavskamelekhin/projects/fitness-house/builds/609265eb-8572-46f0-8e43-883bbfe7f52a
// https://expo.dev/accounts/alinasyniavskamelekhin/projects/fitness-house/builds/a96690b9-c465-469e-b9f9-69b4907a394b


// com.alinasyniavskamelekhin.fitnesshouse
// SHA certificate fingerprints
// 80:d1:d6:ac:72:e6:07:bd:2e:1a:e4:21:88:06:d4:0b:e3:6c:ea:7b

