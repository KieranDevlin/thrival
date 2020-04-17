import React from 'react';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import ResumeCard from '../ResumeCard';

const ResumeList = ({currentUser, navigation}) => {
  const resumes = currentUser.applicantProfile.resume;
  console.log(resumes);
  return <ResumeCard navigation={navigation} resumes={resumes} />;
};

export default ResumeList;
