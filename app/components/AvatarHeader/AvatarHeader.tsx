import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import UserAvatar from "../UserAvatar/UserAvatar";

interface IProps {
}

const AvatarHeader: FC<IProps> = () => {
  return (
    <View style={styles.container}>

      <UserAvatar/>

      <View>
        <Text>User info </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    display: 'flex',
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default AvatarHeader;