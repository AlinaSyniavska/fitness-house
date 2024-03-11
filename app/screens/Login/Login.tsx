import React, {FC, useState} from 'react';
import {View, Pressable, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native';
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {RootStackParamList} from "../../navigation/Navigation";
import {globalColors} from "../../constants/colors";
import {TextInput} from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<Props> = ({route, navigation}) => {

/*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="flat"
        label="Email"
        placeholder="Type Your Google Email"
        right={<TextInput.Affix text="/100"/>}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        mode="flat"
        label="Password"
        placeholder="Type Your Google Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye"/>}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Pressable style={({pressed}) => [
        {backgroundColor: pressed ? globalColors.lightPink : globalColors.lightGray},
        styles.btn,
      ]}>
        <Text style={styles.btnText} onPress={handleLogin}>Sign In</Text>
      </Pressable>
    </View>
  );*/

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Ionicons name="logo-firebase" size={100} color="#FFA611" />
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        Sign In with{" "}
        <Text style={{ color: "#4285F4" }}>
          G<Text style={{ color: "#EA4336" }}>o</Text>
          <Text style={{ color: "#FBBC04" }}>o</Text>
          <Text style={{ color: "#4285F4" }}>g</Text>
          <Text style={{ color: "#34A853" }}>l</Text>
          <Text style={{ color: "#EA4336" }}>e</Text>
        </Text>
      </Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>And Firebase</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#4285F4",
          width: "90%",
          padding: 10,
          borderRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 80,
          marginBottom: 150,
        }}
        onPress={() => route.params.promptAsync()}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
          Sign In with Google
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: globalColors.pink,
    paddingHorizontal: 20,
    gap: 20,
  },
  btn: {
    width: '70%',
    borderRadius: 50,
    padding: 10,
    alignSelf: "center",
  },
  btnText: {
    paddingHorizontal: 50,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },


});

export default Login;