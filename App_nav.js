import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import login_nav from './login_nav';
import fogotpass_nav from './fogotpass_nav';
import resetPass_nav from './resetPass_nav';
import LoginNext from './LoginNext';

const Stack = createStackNavigator();

const App_nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login_nav">
        <Stack.Screen name="login_nav" component={login_nav} />
        <Stack.Screen name="fogotpass_nav" component={fogotpass_nav} />
        <Stack.Screen name="resetPass_nav" component={resetPass_nav} />
        <Stack.Screen name="LoginNext" component={LoginNext} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App_nav;
