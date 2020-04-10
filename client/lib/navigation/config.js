import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
import TopDrawer from '../navigation/TopDrawer';

const GradientHeader = (props) => (
  <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
    <LinearGradient
      colors={['#11185B', '#5877DD']}
      start={{x: 0.0, y: 0.5}}
      end={{x: 3.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
    />
    <Header {...props} />
  </View>
);
const NotificationButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
      }}
      name="bell"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Notification')}
    />
  );
};

const HamburgerButton = ({navigation}) => {
  console.log(navigation);
  return (
    <Icon
      style={{
        marginRight: 20,
      }}
      name="menu"
      color="white"
      size={25}
      // onPress={() => drawerRef.open()}
    />
  );
};

const BackButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        marginRight: 10,
      }}
      name="arrow-left"
      color="white"
      size={25}
      onPress={() => navigation.goBack()}
    />
  );
};

export const sharedScreenOptions = ({route, navigation}) => {
  return {
    headerBackTitleVisible: false,
    header: (props) => <GradientHeader {...props} />,
    headerStyle: {
      backgroundColor: 'transparent',
    },
  };
};
export const sharedDrawerOptions = ({navigation}) => {
  return {
    headerBackTitleVisible: false,
    headerLeft: () => (
      <>
        <BackButton navigation={navigation} />
      </>
    ),
    headerStyle: {
      backgroundColor: '#11185B',
    },
  };
};
export const userProfileOptions = ({route, navigation}) => {
  let drawerRef = React.createRef();
  // const {user, setUser} = useContext(UserContext);
  return {
    headerBackTitleVisible: false,
    header: (props) => <GradientHeader {...props} />,
    headerRight: () => {
      return (
        <>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <HamburgerButton navigation={navigation} />
          </TouchableOpacity>
          {/* <TopDrawer
            navigation={navigation}
            // setUser={setUser}
            // user={user}
            ref={(ref) => {
              drawerRef = ref;
            }}
          /> */}
        </>
      );
    },
    headerStyle: {
      backgroundColor: 'transparent',
    },
  };
};

NotificationButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};
BackButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};
sharedScreenOptions.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
sharedDrawerOptions.propTypes = {
  navigation: PropTypes.object.isRequired,
};
