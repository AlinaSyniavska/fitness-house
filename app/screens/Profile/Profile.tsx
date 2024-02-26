import React, {FC} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";

import {RootStackParamList} from "../../navigation/Navigation";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";
import {globalStyles} from "../../styles";

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile: FC<Props> = ({route, navigation}) => {

  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <View>
        <Text>Profile</Text>
      </View>

      <View style={globalStyles.footer}>
        <FooterMenu/>
      </View>
    </SafeAreaView>
  );
};

export default Profile;