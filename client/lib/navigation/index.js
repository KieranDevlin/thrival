import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavScreens} from './Navigation';
import NotificationModal from '../screens/Notification';
import Home from '../screens/Home';
import Login from '../screens/Login';

const RootStack = createStackNavigator();
const RootStackScreens = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Login" component={Home} />
    <RootStack.Screen name="Signup" component={Login} />
    <RootStack.Screen name="Main" component={BottomTabNavScreens} />
    <RootStack.Screen name="Notification" component={NotificationModal} />
  </RootStack.Navigator>
);

export default RootStackScreens;
