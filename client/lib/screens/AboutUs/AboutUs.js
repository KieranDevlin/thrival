import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const AboutUs = () => {
  return (
    <>
      <View style={styles.header}>
        <LinearGradient
          colors={['#11185B', '#000000']}
          start={{x: 0.1, y: 0.0}}
          end={{x: 0.1, y: 2.5}}
          style={[
            StyleSheet.absoluteFill,
            {
              height: '100%',
              width: '100%',
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            },
          ]}
        />
        <Text style={styles.title}>ABOUT THRIVAL</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>
            Thrival is an application that a group of developers and designers
            produced to help benefit those in need during the COVID-19 pandemic.
            Our goal is to help connect those that have recently lost their jobs
            with employers who are looking for additional help.
          </Text>
          <Text style={styles.text}>
            Thrival works for both employers and employees who seek to connect
            with each other. We simplify the application process by displaying
            all relevant applicant information in a clear and attractive way.
          </Text>
          <Text style={styles.text}>
            Thrival utilises a built in calendar that allows for easy
            organisation when it comes to interview dates or application
            deadlines.
          </Text>
          <Text style={styles.text}>
            We hope Thrival forms the basis for your next exciting opportunity.
          </Text>
        </View>

        <View>
          <Text style={[styles.text, {marginTop: 30, marginBottom: 0}]}>
            Sincerely,
          </Text>
          <Text style={styles.text}>Thrival team.</Text>
        </View>
      </View>
    </>
  );
};

export default AboutUs;
