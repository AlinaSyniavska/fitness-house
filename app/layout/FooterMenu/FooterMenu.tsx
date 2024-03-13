import React from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {View, Text, Pressable, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import {globalColors} from "../../constants/colors";
import {useFonts} from "expo-font";
import {Quicksand_400Regular} from "@expo-google-fonts/quicksand";

const FooterMenu = () => {
  // hooks
  const navigation = useNavigation();
  const route = useRoute();

  const [fontsLoaded] = useFonts({Quicksand_400Regular});

  return (
    <View style={styles.container}>

      <Pressable onPress={() => navigation.navigate('Home' as never)} className={'text-cyan-500'}>
        <Entypo name="home" size={24} style={[styles.iconStyle, {color: route.name === 'Home' ? globalColors.pink : 'black'}]}/>
        <Text style={styles.navItem}>Home</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Profile' as never)}>
        <FontAwesome name="user" size={24} style={[styles.iconStyle, {color: route.name === 'Profile' ? globalColors.pink : 'black'}]}/>
        <Text style={styles.navItem}>Profile</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('DailyInfo' as never)}>
        <FontAwesome name="heartbeat" size={24} color="black"  style={[styles.iconStyle, {color: route.name === 'DailyInfo' ? globalColors.pink : 'black'}]}/>
        <Text style={styles.navItem}>Daily Info</Text>
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
    fontFamily: "Quicksand_400Regular",
  }

});

export default FooterMenu;