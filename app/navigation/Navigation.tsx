import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthRequestPromptOptions, AuthSessionResult} from "expo-auth-session";

import Profile from "../screens/Profile/Profile";
import Main from "../screens/Main/Main";
import Home from "../screens/Home/Home";
import DailyInfo from "../screens/DailyInfo/DailyInfo";
import Login from "../screens/Login/Login";

export type RootStackParamList = {
  Main: undefined;
  Login: { promptAsync:  (options?: (AuthRequestPromptOptions | undefined)) => Promise<AuthSessionResult> };
  Home: undefined;
  DailyInfo: {kcal: number};
  Profile: { userId: string };
};

const Navigation = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName={'Main'} screenOptions={{headerShown: false}}>
      {/*<Stack.Navigator initialRouteName={'Login'} screenOptions={{headerShown: false}}>*/}
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="DailyInfo" component={DailyInfo}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;