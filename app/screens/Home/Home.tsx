import React, {FC} from 'react';
import {SafeAreaView, View, Text, ScrollView} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";

import {RootStackParamList} from "../../navigation/Navigation";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<Props> = ({route, navigation}) => {

    console.log('************ 3')
    console.log(route)
    console.log('************ 4')
    console.log(navigation)

  return (
    <SafeAreaView>
        <View>
          <Text>Home!!!!!!!!!!!!!</Text>
        </View>

      <View>
        <FooterMenu/>
      </View>
    </SafeAreaView>
  );
};

export default Home;