import React, {FC} from 'react';
import {SafeAreaView, View} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";

import {RootStackParamList} from "../../navigation/Navigation";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";
import {globalStyles} from "../../styles";
import AvatarHeader from "../../components/AvatarHeader/AvatarHeader";

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile: FC<Props> = ({route, navigation}) => {

  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <View style={{
        marginTop: 50,
        marginLeft: 20,
      }}>
        <AvatarHeader/>
      </View>

      <View style={globalStyles.footer}>
        <FooterMenu/>
      </View>
    </SafeAreaView>
  );
};

export default Profile;