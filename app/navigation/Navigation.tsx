import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
};

const Navigation = () => {

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
      {/*<Footer />*/}
    </>
  );
};

export default Navigation;