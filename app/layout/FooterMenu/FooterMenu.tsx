import React from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

import {globalColors} from "../../constants/colors";

const FooterMenu = () => {
  // hooks
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>

      <Pressable onPress={() => navigation.navigate('Home' as never)} className={'text-cyan-500'}>
        <AntDesign name="home" size={24} style={[styles.iconStyle, {color: route.name === 'Home' ? globalColors.pink : 'black'}]}/>
        <Text style={styles.navItem}>Home</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Profile' as never)}>
        <Feather name="user" size={24} style={[styles.iconStyle, {color: route.name === 'Profile' ? globalColors.pink : 'black'}]}/>
        <Text style={styles.navItem}>Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-around",
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
  navItem: {
    fontSize: 16,
  }

});

export default FooterMenu;