import React from 'react';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import ResumeCard from '../ResumeCard';

const ResumeList = ({currentUser, navigation}) => {
  return <ResumeCard navigation={navigation} currentUser={currentUser} />;
};

export default ResumeList;
