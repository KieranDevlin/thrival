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
import moment from 'moment';

const Resume = ({navigation, resume}) => {
  console.log(resume.fullname);
  const name = resume.fullname;
  const experiences = resume.experience;
  const educations = resume.education;
  const achievements = resume.achievements;
  const firstname = name.substr(0, name.indexOf(' '));
  const lastname = name.substr(name.indexOf(' ') + 1);

  return (
    <>
      <ScrollView style={styles.main}>
        <View style={styles.profileContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{firstname}</Text>
            <Text style={styles.name}>{lastname}</Text>
            <Text style={styles.occupation}>{resume.title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/John-Smith.png')}
            />
          </View>
        </View>
        <View style={styles.profileMetaContainer}>
          <View style={[styles.section, styles.borderTop]}>
            <Text style={styles.heading}>Experience</Text>
            {experiences.map((experience) => (
              <View style={styles.entry}>
                <Text style={styles.content}>
                  {experience.jobTitle} |{' '}
                  {moment(experience.startDate).format('MMMM D, YYYY')} -
                  {moment(experience.endDate).format('MMMM D, YYYY')}
                </Text>
                <Text style={styles.content}>{experience.location}</Text>
                <Text style={styles.description}>{experience.description}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            {educations.map((education) => (
              <View style={styles.entry}>
                <Text style={styles.content}>
                  {education.credential} |{' '}
                  {moment(education.startDate).format('MMMM D, YYYY')} -
                  {moment(education.endDate).format('MMMM D, YYYY')}
                </Text>
                <Text style={styles.description}>
                  {education.school} | {education.location}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Achievements</Text>
            {achievements.map((achievement) => (
              <View style={styles.entry}>
                <Text style={styles.content}>{achievement.title}</Text>
                <Text style={styles.description}>
                  {achievement.description}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
Resume.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};

export default Resume;
