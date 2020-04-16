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
import ResumeList from '../../components/ResumeList';

const MyResumes = ({currentUser, navigation, user}) => {
  const {
    authContext: {signOutContext},
  } = React.useContext(AuthContext);
  console.log(currentUser);

  return (
    <>
      <ResumeList navigation={navigation} currentUser={currentUser} />
    </>
  );
};
MyResumes.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};

export default MyResumes;
