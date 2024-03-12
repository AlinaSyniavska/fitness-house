import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {NativeStackScreenProps} from "react-native-screens/native-stack";

import {RootStackParamList} from "../../navigation/Navigation";
import {globalColors} from "../../constants/colors";
import {TextInput} from "react-native-paper";
import {useFonts} from "expo-font";
import {Quicksand_700Bold} from "@expo-google-fonts/quicksand";

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
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
  },

});

export default Login;