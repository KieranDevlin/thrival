import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewestScreen from '../screens/Newest';
import MostViewedScreen from '../screens/MostViewed';
import ThemesScreen from '../screens/Themes';
import React from 'react';

const FilterTab = createMaterialTopTabNavigator();

export default FilterTabNav = () => {
  return (
    <FilterTab.Navigator
      sceneContainerStyle={{backgroundColor: '#FBF7EF'}}
      tabBarOptions={{
        style: {
          backgroundColor: '#FBF7EF',
        },
        labelStyle: {
          fontFamily: 'Raleway-Bold',
          textTransform: 'none',
          fontSize: 15,
        },
        indicatorStyle: {
          backgroundColor: '#000000',
        },
      }}>
      <FilterTab.Screen name="Newest" component={NewestScreen} />
      <FilterTab.Screen name="Most Viewed" component={MostViewedScreen} />
      <FilterTab.Screen name="Themes" component={ThemesScreen} />
    </FilterTab.Navigator>
  );
};
