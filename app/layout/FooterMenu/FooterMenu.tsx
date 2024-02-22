import React from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {View, Text, Pressable, Image, TouchableOpacity} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

const FooterMenu = () => {
  // hooks
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>

      <Pressable onPress={() => navigation.navigate('Home')}>
        <AntDesign name="home" size={24} color="red"/>
        <Text>Home</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Feather name="user" size={24}/>

        {/*        <FontAwesome5
          name="plus-square"
          style={styles.iconStyle}
          color={route.name === "Post" && "orange"}
        />*/}
        <Text>Profile</Text>
      </Pressable>


      {/*      <TouchableOpacity onPress={() => navigation.navigate("Myposts")}>
        <FontAwesome5
          name="list"
          style={styles.iconStyle}
          color={route.name === "Myposts" && "orange"}
        />
        <Text>My Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <FontAwesome5
          name="user"
          style={styles.iconStyle}
          color={route.name === "Account" && "orange"}
        />
        <Text>Account</Text>
      </TouchableOpacity>*/}

    </View>
  );
};

export default FooterMenu;