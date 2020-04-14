import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const SavedJobs = ({route, navigation, faveIds}) => {
  return <View style={styles.container}></View>;
};
SavedJobs.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
};
export default SavedJobs;
