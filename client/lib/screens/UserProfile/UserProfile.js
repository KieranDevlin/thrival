import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../context/AuthProvider';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const UserProfile = ({navigation, user}) => {
  const {
    authContext: {signOutContext},
  } = React.useContext(AuthContext);

  name = 'John Adam-Smith';
  firstname = name.substr(0, name.indexOf(' '));
  lastname = name.substr(name.indexOf(' ') + 1);

  return (
    <>
      <ScrollView style={styles.main}>
        <View style={styles.profileContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{firstname}</Text>
            <Text style={styles.name}>{lastname}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/John-Smith.png')}
            />
          </View>
        </View>
        <View style={styles.profileMetaContainer}>
          <Text style={styles.heading}>UX Designer</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.heading}>Experience</Text>
          <Text style={styles.content}>UX Designer | 2015-2020</Text>
          <Text style={styles.content}>EA Studios | Vancouver, Canada</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.content}>Graphic Designer | 2013-2015</Text>
          <Text style={styles.content}>
            Open Road Auto Group | Vancouver, Canada
          </Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.content}>Graphic Design | 2009-2013</Text>
          <Text style={styles.content}>
            University of British Columbia | Vancouver, Canada
          </Text>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.heading}>Achievements</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <Text style={{color: '#FFFFFF'}}>email@email.com</Text>
        <Text>My Resumes</Text>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderRadius: 5,
            width: 100,
          }}
          onPress={signOutContext}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
UserProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};

export default UserProfile;
