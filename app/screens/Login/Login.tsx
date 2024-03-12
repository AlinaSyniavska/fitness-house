import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {useFonts} from "expo-font";
import {TextInput} from "react-native-paper";
import {Quicksand_700Bold} from "@expo-google-fonts/quicksand";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";

import {RootStackParamList} from "../../navigation/Navigation";
import {globalColors} from "../../constants/colors";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<Props> = ({route, navigation}) => {
  const [fontsLoaded] = useFonts({Quicksand_700Bold});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>

      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Ionicons name="logo-firebase" size={100} color="#FFA611"/>
        <Text style={{fontSize: 32, fontFamily: 'Quicksand_700Bold'}}>
          Sign In with{" "}
          <Text style={{color: "#4285F4"}}>
            G<Text style={{color: "#EA4336"}}>o</Text>
            <Text style={{color: "#FBBC04"}}>o</Text>
            <Text style={{color: "#4285F4"}}>g</Text>
            <Text style={{color: "#34A853"}}>l</Text>
            <Text style={{color: "#EA4336"}}>e</Text>
          </Text>
        </Text>
        <Text style={{fontSize: 32, fontFamily: 'Quicksand_700Bold'}}>And Firebase</Text>
      </View>

      <View style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
      }}>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Type Your Google Email"
          right={<TextInput.Affix text="/100"/>}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          mode="outlined"
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
          <AntDesign name="google" size={24} color="white"/>
          <Text style={styles.btnText} onPress={handleLogin}>Sign In with Google</Text>
        </Pressable>
      </View>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 100,
    gap: 50,
  },
  btn: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "center",
    backgroundColor: '#4285F4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Quicksand_700Bold',
  },

});

export default Login;