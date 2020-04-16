import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import ApplicationCard from '../ApplicationCard';
import Text from '../CustomText';
import styles from './styles';

const ApplicationList = ({myApplications, navigation}) => {
  return myApplications.length > 0 ? (
    myApplications.map((application) => (
      <ApplicationCard
        application={application}
        key={application.id}
        navigation={navigation}
      />
    ))
  ) : (
    <View style={styles.center}>
      <Text>No Applications!</Text>
    </View>
  );
};

ApplicationList.propTypes = {
  navigation: PropTypes.object,
  myApplications: PropTypes.array,
};

export default ApplicationList;
