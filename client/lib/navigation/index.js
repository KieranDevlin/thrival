import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavScreens} from './Navigation';
import Home from '../screens/AddJobPost';
import AboutUsModal from '../screens/AboutUs';
import ContactUsModal from '../screens/ContactUs';
import PrivacyPolicyModal from '../screens/PrivacyPolicy';
import {AuthContext} from '../context/AuthProvider';
import {AuthStackScreens} from '../navigation/AuthNav';

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
