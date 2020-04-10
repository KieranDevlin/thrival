import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../context/AuthProvider';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileDrawer} from '../../navigation/Navigation';

const UserProfile = ({navigation, user}) => {
  const {
    authContext: {signOutContext},
  } = React.useContext(AuthContext);
  return (
    <>
      <View style={styles.main}>
        {/* <ProfileDrawer /> */}

        <View
          style={{
            width: '100%',
            height: 175,
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#11185B', '#5877DD']}
            start={{x: 0.0, y: 0.5}}
            end={{x: 3.0, y: 0.0}}
            style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
          />
          <View style={{height: 100, width: 50}}>
            <View>
              <LinearGradient
                colors={['#FFFFFF', '#ED9421']}
                start={{x: 0.0, y: 1.5}}
                end={{x: 1.0, y: 0.0}}
                style={[
                  StyleSheet.absoluteFill,
                  {borderRadius: 50, height: 85, width: 85},
                ]}
              />
            </View>
            <View
              style={{
                width: 75,
                height: 75,
                borderRadius: 50,
                overflow: 'hidden',
                position: 'absolute',
                top: '5%',
                left: '10%',
              }}>
              <Image
                style={{height: 75, width: 75}}
                source={{
                  uri:
                    'https://lh3.googleusercontent.com/proxy/ppa6eCxUM6JYCcRJ0pU6cyALcelyFUJFgK0kd3Wqa-AY9Hw4qLx79GQxMroNMPUtf5c4tGwQQyF1k5Yqv53Nucnctsb_pjq0DzWg_POJ8e8nKJEEwG9ttBh_XCbxbRX1jJ1WS-lZJGxFRgzpWJQMBf7f9Mpkw61o7iUeD6Q0qGQxCYdiF5sJIR5n7TzxzdaYO0MwHxpqVIeDA1RL',
                }}
              />
            </View>
          </View>
          <Text style={{color: '#FFFFFF'}}>Ken Huang</Text>
          <Text style={{color: '#FFFFFF'}}>email@email.com</Text>
        </View>
        <Text>Account Information</Text>
        <Text>My Resumes</Text>
        <Text>Logout</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderRadius: 5,
            width: 100,
          }}
          onPress={signOutContext}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
UserProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};

export default UserProfile;
