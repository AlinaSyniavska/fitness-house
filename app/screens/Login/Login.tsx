import React, {FC, useState} from 'react';
import { View, Button } from 'react-native';
import {NativeStackScreenProps} from "react-native-screens/native-stack";

import {RootStackParamList} from "../../navigation/Navigation";
import {globalColors} from "../../constants/colors";
import {TextInput} from "react-native-paper";
// import auth from '@react-native-firebase/auth';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<Props> = ({route, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
/*    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login error:', error);
    }*/


    navigation.navigate('Home')
  };

  return (
    <View>
      <TextInput
        mode="flat"
        label="Email"
        placeholder="Type Your Google Email"
        right={<TextInput.Affix text="/100" />}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        mode="flat"
        label="Password"
        placeholder="Type Your Google Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />


      <Button title="Login" onPress={handleLogin} color={`${globalColors.pink}`} />
    </View>
  );
};

export default Login;