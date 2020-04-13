import React from 'react';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error';
import PropTypes from 'prop-types';
import JobList from '../../components/JobList/JobList';
import styles from './styles';
import {TouchableOpacity, Linking, View} from 'react-native';

const Jobboard = ({navigation, route}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.h1}>Latest Listings</Text>
        <JobList navigation={navigation} />
      </View>
      <View style={styles.container}>
        <Text style={styles.h1}>Saved Jobs</Text>
        <JobList navigation={navigation} />
      </View>
      <TouchableOpacity
        style={styles.attribution}
        onPress={() => {
          Linking.openURL('https://clearbit.com');
        }}>
        <Text>Logos provided by Clearbit</Text>
      </TouchableOpacity>
    </>
  );
};

Jobboard.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  speakers: PropTypes.array,
};
export default Jobboard;
