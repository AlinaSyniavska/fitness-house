import React, {FC, useState} from 'react';
import {StyleSheet, View} from "react-native";
import { Avatar } from 'react-native-paper';

interface IProps {
}

const UserAvatar: FC<IProps> = () => {

  const [authUser, setAuthUser] = useState<boolean>(true);

  return (
    <View style={styles.container}>

      {
        authUser
        ? <Avatar.Image size={48} source={require('../../../assets/dailyInfo/woman-avatar.png')} />
          : <Avatar.Text size={48} label="XD" />
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
})

export default UserAvatar;