import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JobboardScreen from '../screens/Jobboard';
import ApplicationScreen from '../screens/Application';
import CalendarScreen from '../screens/Calendar';
import UserProfileScreen from '../screens/UserProfile';
import {sharedScreenOptions} from './config';
import {onlyBackStackOptions} from './config';
import SearchScreen from '../screens/Search';
import SettingsScreen from '../screens/Settings';
import AboutUsScreen from '../screens/AboutUs';
import ContactUsScreen from '../screens/ContactUs';
import PrivacyPolicyScreen from '../screens/PrivacyPolicy';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const JobboardStack = createStackNavigator();
const JobboardStackScreens = () => {
  return (
    <JobboardStack.Navigator
      initialRouteName="Jobboard"
      screenOptions={sharedScreenOptions}>
      <JobboardStack.Screen
        name="Jobboard"
        component={JobboardScreen}
        options={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {},
        }}
      />
    </JobboardStack.Navigator>
  );
};
const ApplicationStack = createStackNavigator();
const ApplicationStackScreens = () => {
  return (
    <ApplicationStack.Navigator
      initialRouteName="Application"
      screenOptions={sharedScreenOptions}>
      <ApplicationStack.Screen
        name="Application"
        component={ApplicationScreen}
        options={{
          title: 'My Applications',
          headerTintColor: '#FFFFFF',
        }}
      />
    </ApplicationStack.Navigator>
  );
};
const CalendarStack = createStackNavigator();
const CalendarStackScreens = () => {
  return (
    <CalendarStack.Navigator
      initialRouteName="Calendar"
      screenOptions={sharedScreenOptions}>
      <CalendarStack.Screen
        name="My Calendar"
        component={CalendarScreen}
        options={{
          headerTintColor: '#FFFFFF',
        }}
      />
    </CalendarStack.Navigator>
  );
};
const UserProfileStack = createStackNavigator();
const UserProfileStackScreens = () => {
  return (
    <UserProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={onlyBackStackOptions}>
      <UserProfileStack.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerTintColor: '#FFFFFF',
        }}
      />
      <UserProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTintColor: '#FFFFFF',
        }}
      />
      <UserProfileStack.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          headerTintColor: '#FFFFFF',
        }}
      />
      <UserProfileStack.Screen
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          headerTintColor: '#FFFFFF',
        }}
      />
      <UserProfileStack.Screen
        name="Privacy Policy"
        component={PrivacyPolicyScreen}
        options={{
          headerTintColor: '#FFFFFF',
        }}
      />
    </UserProfileStack.Navigator>
  );
};
const SearchStack = createStackNavigator();
const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={onlyBackStackOptions}>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTintColor: '#FFFFFF',
        }}
      />
    </SearchStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
export const BottomTabNavScreens = () => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: '#ED9421',
      inactiveTintColor: '#FFFFFF',
      inactiveBackgroundColor: '#11185B',
      tabStyle: {},
      style: {
        backgroundColor: '#11185B',
      },
      labelStyle: {
        fontSize: 12,
        transform: [{translateY: 10}],
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        if (route.name === 'Jobboard') {
          return (
            <Icon
              name="view-dashboard"
              color={focused ? '#ED9421' : '#FFFFFF'}
              size={30}
              style={{transform: [{translateY: 10}]}}
            />
          );
        } else if (route.name === 'Application') {
          return (
            <Icon
              name="file-document-edit"
              color={focused ? '#ED9421' : '#FFFFFF'}
              size={30}
              style={{transform: [{translateY: 10}]}}
            />
          );
        } else if (route.name === 'Calendar') {
          return (
            <Icon
              name="calendar"
              color={focused ? '#ED9421' : '#FFFFFF'}
              size={30}
              style={{transform: [{translateY: 10}]}}
            />
          );
        } else if (route.name === 'Profile') {
          return (
            <Icon
              name="account"
              color={focused ? '#ED9421' : '#FFFFFF'}
              size={30}
              style={{transform: [{translateY: 10}]}}
            />
          );
        } else if (route.name === 'Search') {
          return (
            <Icon
              name="magnify"
              color={focused ? '#ED9421' : '#FFFFFF'}
              size={30}
              style={{transform: [{translateY: 10}]}}
            />
          );
        }
      },
    })}>
    <BottomTabNav.Screen name="Jobboard" component={JobboardStackScreens} />
    <BottomTabNav.Screen name="Calendar" component={CalendarStackScreens} />
    <BottomTabNav.Screen name="Search" component={SearchStackScreens} />
    <BottomTabNav.Screen
      name="Application"
      component={ApplicationStackScreens}
    />
    <BottomTabNav.Screen name="Profile" component={UserProfileStackScreens} />
  </BottomTabNav.Navigator>
);
