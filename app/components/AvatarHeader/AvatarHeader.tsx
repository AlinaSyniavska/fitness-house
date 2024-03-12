import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import UserAvatar from "../UserAvatar/UserAvatar";
import {useFonts} from "expo-font";
import { Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";
import {globalColors} from "../../constants/colors";

interface IProps {
}

const AvatarHeader: FC<IProps> = () => {
  const [fontsLoaded] = useFonts({
    Quicksand_600SemiBold
  });

  const [authUser, setAuthUser] = useState<string>('Tiffany Nelson');

  return (
    <View style={styles.container}>

      <UserAvatar/>

      <View>
        <Text style={styles.userInfo}>{`Hello, ${authUser}!`}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 30,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 22,
    color: globalColors.gray,
  }

})

export default AvatarHeader;