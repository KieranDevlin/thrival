import React from 'react';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {backOnlyOptions} from '../navigation/config';

const AuthStack = createStackNavigator();

export const AuthStackScreens = (props) => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={backOnlyOptions}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
        }}
      />
    </AuthStack.Navigator>
  );
};
