import React from 'react';
import styles from './styles';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Text from '../CustomText/CustomText';

const ApplicationCard = () => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.main}>
          <View style={styles.employer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/images/Spotify.png')}
              />
            </View>
            <View style={styles.employerInfo}>
              <Text style={styles.jobTitle}>Graphic Designer</Text>
              <Text style={styles.company}>Spotify</Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.location}>Vancouver, Canada</Text>
            <View style={styles.borderRadius}>
              <Text style={[styles.status, styles.applied]}>Applied</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shadow}>
        <View style={styles.main}>
          <View style={styles.employer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/images/RBC.jpeg')}
              />
            </View>
            <View style={styles.employerInfo}>
              <Text style={styles.jobTitle}>Financial Advisor</Text>
              <Text style={styles.company}>RBC Bank</Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.location}>Vancouver, Canada</Text>
            <View style={styles.borderRadius}>
              <Text style={[styles.status, styles.pending]}>Pending</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shadow}>
        <View style={styles.main}>
          <View style={styles.employer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/images/RBC.jpeg')}
              />
            </View>
            <View style={styles.employerInfo}>
              <Text style={styles.jobTitle}>Financial Advisor</Text>
              <Text style={styles.company}>RBC Bank</Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.location}>Vancouver, Canada</Text>
            <View style={styles.borderRadius}>
              <Text style={[styles.status, styles.interview]}>Interview</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ApplicationCard;
