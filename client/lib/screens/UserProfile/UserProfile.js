import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const UserProfile = ({navigation, user}) => {
  return (
    <View style={styles.main}>
      <Text>Account Information</Text>
      <Text>My Resumes</Text>
      <Text>Settings</Text>
      <Text>About Us</Text>
      <Text>Contact Us</Text>
      <Text>Privacy Policy</Text>
      <Text>Logout</Text>
    </View>
  );
};
UserProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  user: PropTypes.array,
};

export default UserProfile;
