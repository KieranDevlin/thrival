import React from 'react';
import styles from './styles';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Text from '../CustomText/CustomText';
import moment from 'moment';

const ResumeCard = ({navigation, resumes}) => {
  return (
    <>
      {resumes.map((resume) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Resume', {resume: resume})}>
          <View style={styles.main}>
            <View style={styles.resume}>
              {/* <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/images/Spotify.png')}
              />
            </View> */}
              <View style={styles.resumeInfo}>
                <Text style={[styles.resumeTitle, styles.margin]}>
                  {resume.title}
                </Text>
                <Text style={[styles.company, styles.margin]}>
                  Date Created:{' '}
                  {moment(resume.createdAt).format('MMMM D, YYYY')}
                </Text>
                <Text style={[styles.location, styles.margin]}>
                  Applied to:
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default ResumeCard;
