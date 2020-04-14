import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavScreens} from './Navigation';
import NotificationModal from '../screens/Notification';
import Home from '../screens/AddJobPost';
import SettingsModal from '../screens/Settings';
import AboutUsModal from '../screens/AboutUs';
import ContactUsModal from '../screens/ContactUs';
import PrivacyPolicyModal from '../screens/PrivacyPolicy';

import Signup from '../screens/Signup';
import Login from '../screens/Login';
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
        <RootStack.Navigator mode="modal" headerMode="none">
          {!state.userToken ? (
            <>
              <RootStack.Screen
                headerMode="none"
                name="Auth"
                component={AuthStackScreens}
              />
            </>
          ) : (
            <>
              <RootStack.Screen name="Main" component={BottomTabNavScreens} />
              <RootStack.Screen
                name="Notification"
                component={NotificationModal}
              />
              <RootStack.Screen name="Settings" component={SettingsModal} />
              <RootStack.Screen name="About Us" component={AboutUsModal} />
              <RootStack.Screen name="Contact Us" component={ContactUsModal} />
              <RootStack.Screen
                name="Privacy Policy"
                component={PrivacyPolicyModal}
              />
            </>
          )}
        </RootStack.Navigator>
      )}
    </AuthContext.Consumer>
  );
};

export default RootStackScreens;
