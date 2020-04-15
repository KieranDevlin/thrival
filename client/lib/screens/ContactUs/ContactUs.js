import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const ContactUs = () => {
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
        <Text style={styles.title}>CONTACT US</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at thrival@thrivalapp.com.
        </Text>
      </View>
    </>
  );
};

export default ContactUs;
