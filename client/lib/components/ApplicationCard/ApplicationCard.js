import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';

const ApplicationCard = ({application, navigation}) => {
  const getDomain = (link) => {
    if (link.indexOf('://') > -1) {
      link.slice(link.indexOf('://') + 3, -1);
    }
    return link.slice(0, link.indexOf('/'));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Opportunity', {job: application});
      }}>
      <View style={styles.main}>
        <View style={styles.employer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `https://logo.clearbit.com/${getDomain(
                  application.employer.contact.website,
                )}`,
              }}
            />
          </View>
          <View style={styles.employerInfo}>
            <Text style={styles.jobTitle}>JOB NAME HERE</Text>
            <Text style={styles.company}>COMPANY NAME HERE</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.location}>{application.location}</Text>
          <View style={styles.borderRadius}>
            <Text style={[styles.status, styles.applied]}>Applied</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
ApplicationCard.propTypes = {
  navigation: PropTypes.object,
  applications: PropTypes.object,
};
export default ApplicationCard;
