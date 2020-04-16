import React from 'react';
import styles from './styles';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Text from '../CustomText/CustomText';

const ResumeCard = ({navigation, currentUser}) => {
  console.log(currentUser);
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Resume')}>
        <View style={styles.main}>
          <View style={styles.resume}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/images/Spotify.png')}
              />
            </View>
            <View style={styles.employerInfo}>
              <Text style={styles.resumeTitle}>Resume Title</Text>
              <Text style={styles.company}>Date Created: </Text>
              <Text style={styles.location}>Applied to: </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ResumeCard;
