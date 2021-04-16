import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import signup_nav from './signup_nav';
import signin_nav from './signin_nav';
import fogotpass_nav from './fogotpass_nav';
import resetPass_nav from './resetPass_nav';
import LoginNext from './LoginNext';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();

const App_nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login_nav">
        <Stack.Screen name="signup_nav" component={signup_nav} />
        <Stack.Screen name="fogotpass_nav" component={fogotpass_nav} />
        <Stack.Screen name="resetPass_nav" component={resetPass_nav} />
        <Stack.Screen name="LoginNext" component={LoginNext} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="signin_nav" component={signin_nav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App_nav;
