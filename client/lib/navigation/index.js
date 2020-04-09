import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavScreens} from './Navigation';
import TicketScreen from '../screens/Ticket';
import NotificationModal from '../screens/Notification';
import {DrawerNavStackScreens} from './DrawerNavigation';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import CheckoutConfirmation from '../screens/CheckoutConfirmation';
import {AuthContext} from '../context/AuthProvider';

const AuthStack = createStackNavigator();

const AuthStackScreens = (props) => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreens = () => {
  return (
    <AuthContext.Consumer>
      {({state}) => (
        <RootStack.Navigator headerMode="none">
          {!state.userToken ? (
            <>
              <RootStack.Screen name="Auth" component={AuthStackScreens} />
            </>
          ) : (
            <>
              <RootStack.Screen name="Main" component={BottomTabNavScreens} />
              <RootStack.Screen
                name="DrawerNav"
                component={DrawerNavStackScreens}
              />
              <RootStack.Screen name="Ticket" component={TicketScreen} />
              <RootStack.Screen
                name="Notification"
                component={NotificationModal}
              />
              <RootStack.Screen
                name="Confirmation"
                component={CheckoutConfirmation}
              />
            </>
          )}
        </RootStack.Navigator>
      )}
    </AuthContext.Consumer>
  );
};

export default RootStackScreens;
