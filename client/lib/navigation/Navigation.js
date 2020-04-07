import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/Explore';
import EventsScreen from '../screens/Events';
import TicketsScreen from '../screens/Tickets';
import UserProfileScreen from '../screens/UserProfile';
import {sharedScreenOptions} from './config';
import {onlyBackStackOptions} from './config';
import SearchScreen from '../screens/Search';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ExploreStack = createStackNavigator();
const ExploreStackScreens = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={sharedScreenOptions}>
      <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
    </ExploreStack.Navigator>
  );
};
const EventsStack = createStackNavigator();
const EventsStackScreens = () => {
  return (
    <EventsStack.Navigator
      initialRouteName="Events"
      screenOptions={sharedScreenOptions}>
      <EventsStack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          title: 'Upcoming Events',
          headerTintColor: '#FBF7EF',
        }}
      />
    </EventsStack.Navigator>
  );
};
const TicketsStack = createStackNavigator();
const TicketsStackScreens = () => {
  return (
    <TicketsStack.Navigator
      initialRouteName="Tickets"
      screenOptions={sharedScreenOptions}>
      <TicketsStack.Screen
        name="My Tickets"
        component={TicketsScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
    </TicketsStack.Navigator>
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
          headerTintColor: '#FBF7EF',
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
          headerTintColor: '#FBF7EF',
        }}
      />
    </SearchStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
export const BottomTabNavScreens = () => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: '#FBF7EF',
      inactiveTintColor: '#FBF7EF',
      activeBackgroundColor: '#3C3C3C',
      inactiveBackgroundColor: '#000000',
      tabStyle: {
        height: 120,
      },
      style: {
        backgroundColor: '#000000',
        borderRadius: 20,
        height: 80,
        transform: [{translateY: -20}],
      },
      labelStyle: {
        fontSize: 14,
        transform: [{translateY: -40}],
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: () => {
        if (route.name === 'Explore') {
          return (
            <Icon
              style={{
                transform: [{translateY: -15}],
              }}
              name="magnify"
              color="white"
              size={40}
            />
          );
        } else if (route.name === 'Events') {
          return (
            <Icon
              style={{
                transform: [{translateY: -15}],
              }}
              name="magnify"
              color="white"
              size={40}
            />
          );
        } else if (route.name === 'Tickets') {
          return (
            <Icon
              style={{
                transform: [{translateY: -15}],
              }}
              name="magnify"
              color="white"
              size={40}
            />
          );
        } else if (route.name === 'Profile') {
          return (
            <Icon
              style={{
                transform: [{translateY: -15}],
              }}
              name="magnify"
              color="white"
              size={40}
            />
          );
        } else if (route.name === 'Search') {
          return (
            <Icon
              style={{
                transform: [{translateY: -15}],
              }}
              name="magnify"
              color="white"
              size={40}
            />
          );
        }
      },
    })}>
    <BottomTabNav.Screen name="Explore" component={ExploreStackScreens} />
    <BottomTabNav.Screen name="Events" component={EventsStackScreens} />
    <BottomTabNav.Screen name="Search" component={SearchStackScreens} />
    <BottomTabNav.Screen name="Tickets" component={TicketsStackScreens} />
    <BottomTabNav.Screen name="Profile" component={UserProfileStackScreens} />
  </BottomTabNav.Navigator>
);
