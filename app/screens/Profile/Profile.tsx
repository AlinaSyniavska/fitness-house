import React, {FC} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";

import {RootStackParamList} from "../../navigation/Navigation";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile: FC<Props> = ({route, navigation}) => {

  return (
    <SafeAreaView>
      <View>
        <Text>Profile</Text>
      </View>

      <FooterMenu/>
    </SafeAreaView>
  );
};

export default Profile;