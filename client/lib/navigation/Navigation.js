import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JobboardScreen from '../screens/Jobboard';
import ApplicationScreen from '../screens/Application';
import CalendarScreen from '../screens/Calendar';
import JobScreen from '../screens/Job';
import UserProfileScreen from '../screens/UserProfile';
import {sharedScreenOptions} from './config';
import {backOnlyOptions} from './config';
import SearchScreen from '../screens/Search';
import SavedJobs from '../screens/SavedJobs';
import AboutUsScreen from '../screens/AboutUs';
import ContactUsScreen from '../screens/ContactUs';
import PrivacyPolicyScreen from '../screens/PrivacyPolicy';
import NotificationScreen from '../screens/Notification';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResumeScreen from '../screens/Resume';
import SavedJobsScreen from '../screens/SavedJobs';
import ManageAccountScreen from '../screens/ManageAccount';
import {View} from 'react-native';

const JobboardStack = createStackNavigator();
const JobboardStackScreens = () => {
  return (
    <JobboardStack.Navigator
      initialRouteName="Opportunities"
      screenOptions={sharedScreenOptions}>
      <JobboardStack.Screen
        name="Opportunities"
        component={JobboardScreen}
        options={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            opacity: 0,
          },
        }}
      />
      <JobboardStack.Screen
        name="Opportunity"
        component={JobScreen}
        options={{
          headerTintColor: '#FBF7EF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
        }}
      />
    </JobboardStack.Navigator>
  );
};
const SearchStack = createStackNavigator();
const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={sharedScreenOptions}>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
        }}
      />
    </SearchStack.Navigator>
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
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
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
      screenOptions={backOnlyOptions}>
      <UserProfileStack.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
        }}
      />
      <UserProfileStack.Screen
        name="Saved Opportunities"
        component={SavedJobs}
        options={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
        }}
      />
      <UserProfileStack.Screen
        name="Application"
        component={ApplicationScreen}
        options={{
          title: 'My Applications',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            transform: [{translateY: -2}],
            fontWeight: '400',
          },
        }}
      />
      <UserProfileStack.Screen
        name="Resume"
        component={ResumeScreen}
        options={{
          title: 'My Resume',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            transform: [{translateY: -2}],
            fontWeight: '400',
          },
        }}
      />
      <UserProfileStack.Screen
        name="Saved Jobs"
        component={SavedJobsScreen}
        options={{
          title: 'Saved Jobs',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            transform: [{translateY: -2}],
            fontWeight: '400',
          },
        }}
      />
      <UserProfileStack.Screen
        name="Manage Account"
        component={ManageAccountScreen}
        options={{
          title: 'Manage Account',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            transform: [{translateY: -2}],
            fontWeight: '400',
          },
        }}
      />
    </UserProfileStack.Navigator>
  );
};
const NotificationStack = createStackNavigator();
const NotificationStackScreens = () => {
  return (
    <NotificationStack.Navigator
      initialRouteName="Notification"
      screenOptions={sharedScreenOptions}>
      <NotificationStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Raleway-Regular',
            fontWeight: '400',
          },
        }}
      />
    </NotificationStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
export const BottomTabNavScreens = () => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#FFFFFF',
      inactiveBackgroundColor: '#11185B',
      tabStyle: {},
      style: {
        backgroundColor: '#11185B',
      },
      labelStyle: {
        fontSize: 10,
        transform: [{translateY: 10}],
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        if (route.name === 'Opportunities') {
          return (
            <>
              {focused ? (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15,
                    alignSelf: 'center',
                    transform: [{translateY: 8}],
                  }}></View>
              ) : null}
              <Icon
                name="view-dashboard"
                color={'#FFFFFF'}
                size={30}
                style={{
                  transform: [{translateY: 12}],
                }}
              />
            </>
          );
        } else if (route.name === 'Search') {
          return (
            <>
              {focused ? (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15,
                    alignSelf: 'center',
                    transform: [{translateY: 8}],
                  }}></View>
              ) : null}
              <Icon
                name="magnify"
                color={'#FFFFFF'}
                size={30}
                style={{transform: [{translateY: 12}]}}
              />
            </>
          );
        } else if (route.name === 'Calendar') {
          return (
            <>
              {focused ? (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15,
                    alignSelf: 'center',
                    transform: [{translateY: 8}],
                  }}></View>
              ) : null}
              <Icon
                name="calendar"
                color={'#FFFFFF'}
                size={30}
                style={{transform: [{translateY: 12}]}}
              />
            </>
          );
        } else if (route.name === 'Notification') {
          return (
            <>
              {focused ? (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15,
                    alignSelf: 'center',
                    transform: [{translateY: 8}],
                  }}></View>
              ) : null}
              <Icon
                name="bell"
                color={'#FFFFFF'}
                size={30}
                style={{transform: [{translateY: 12}]}}
              />
            </>
          );
        } else if (route.name === 'Profile') {
          return (
            <>
              {focused ? (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15,
                    alignSelf: 'center',
                    transform: [{translateY: 8}],
                  }}></View>
              ) : null}
              <Icon
                name="account"
                color={'#FFFFFF'}
                size={30}
                style={{transform: [{translateY: 12}]}}
              />
            </>
          );
        }
      },
    })}>
    <BottomTabNav.Screen
      name="Opportunities"
      component={JobboardStackScreens}
    />
    <BottomTabNav.Screen name="Search" component={SearchStackScreens} />

    <BottomTabNav.Screen name="Calendar" component={CalendarStackScreens} />
    <BottomTabNav.Screen
      name="Notification"
      component={NotificationStackScreens}
    />
    <BottomTabNav.Screen name="Profile" component={UserProfileStackScreens} />
  </BottomTabNav.Navigator>
);
