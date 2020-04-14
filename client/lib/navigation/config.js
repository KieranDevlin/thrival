import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState, useRef} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../navigation/styles';
import RBSheet from 'react-native-raw-bottom-sheet';

const GradientHeader = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        overflow: 'hidden',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}>
      <LinearGradient
        colors={['#11185B', '#000000']}
        start={{x: 0.1, y: 0.0}}
        end={{x: 0.1, y: 2.5}}
        style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
      />
      <Header {...props} />
    </View>
  );
};

const SearchButton = ({navigation}) => {
  return (
    <Icon
      style={[styles.icon, {marginLeft: 10, transform: [{translateY: 0}]}]}
      name="magnify"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Search')}
    />
  );
};
const MailButton = ({navigation}) => {
  return <Icon style={styles.icon} name="email" color="white" size={25} />;
};
const NotificationButton = ({navigation}) => {
  return (
    <Icon
      style={styles.icon}
      name="bell"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Notification')}
    />
  );
};
const HamburgerButton = ({navigation}) => {
  return <Icon style={styles.icon} name="menu" color="white" size={25} />;
};
const BackButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 5,
      }}
      name="chevron-left"
      color="white"
      size={30}
      onPress={() => navigation.goBack()}
    />
  );
};
export const sharedScreenOptions = (props) => {
  const refRBSheet = React.createRef();
  console.disableYellowBox = true;
  //remove later (useNativeDriver warning)
  return {
    headerBackTitleVisible: false,

    header: (props) => {
      return (
        <>
          <RBSheet
            ref={refRBSheet}
            animationType="fade"
            closeOnDragDown={true}
            closeOnPressMask={true}
            duration={300}
            height={300}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#FFFFFF',
                width: 100,
              },
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}>
            <LinearGradient
              colors={['#11185B', '#000000']}
              start={{x: 0.1, y: 0.0}}
              end={{x: 0.1, y: 2.0}}
              style={[
                StyleSheet.absoluteFill,
                {height: '100%', width: '100%', zIndex: -99},
              ]}
            />
            <View style={styles.menu}>
              <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => {
                  refRBSheet.current.close();
                  props.navigation.navigate('Settings');
                }}>
                <Icon
                  style={[styles.menuItem, styles.menuIcon]}
                  name="settings-outline"
                  color="white"
                />
                <Text style={styles.menuItem}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => {
                  refRBSheet.current.close();
                  props.navigation.navigate('About Us');
                }}>
                <Icon
                  style={[styles.menuItem, styles.menuIcon]}
                  name="information-outline"
                  color="white"
                />
                <Text style={styles.menuItem}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => {
                  refRBSheet.current.close();
                  props.navigation.navigate('Contact Us');
                }}>
                <Icon
                  style={[styles.menuItem, styles.menuIcon]}
                  name="message-text-outline"
                  color="white"
                />
                <Text style={styles.menuItem}>Contact Us</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => {
                  refRBSheet.current.close();
                  props.navigation.navigate('Privacy Policy');
                }}>
                <Icon
                  style={[styles.menuItem, styles.menuIcon]}
                  name="shield-check-outline"
                  color="white"
                />
                <Text style={styles.menuItem}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItemContainer}>
                <Icon
                  style={[styles.menuItem, styles.menuIcon]}
                  name="logout"
                  color="white"
                />
                <Text style={styles.menuItem}>Logout</Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
          <GradientHeader {...props} />
        </>
      );
    },
    headerRight: () => {
      return (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Job')}>
            <MailButton navigation={props.navigation} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Notification')}>
            <NotificationButton navigation={props.navigation} />
          </TouchableOpacity>

          <SearchButton navigation={props.navigation} />

          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <HamburgerButton />
          </TouchableOpacity>
        </View>
      );
    },
    headerLeft: () => {
      return (
        <Text
          style={{
            color: '#FFF',
            fontWeight: '900',
            fontSize: 20,
            marginLeft: 20,
            transform: [{translateY: -8}],
          }}>
          THRIVAL
        </Text>
      );
    },
    headerStyle: {
      backgroundColor: 'transparent',
    },
  };
};

export const backOnlyOptions = ({route, navigation}) => {
  return {
    headerBackTitleVisible: false,
    header: (props) => <GradientHeader {...props} />,
    headerRight: () => {
      return null;
    },
    headerLeft: () => {
      return route.name === 'Profile' ? null : (
        <BackButton navigation={navigation} />
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
