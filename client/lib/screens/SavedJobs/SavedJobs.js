import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {FavesContext} from '../../context/FavesContext';
import Text from '../../components/CustomText';
import JobList from '../../components/JobList';

const SavedJobs = ({route, navigation}) => {
  return <></>;
};
SavedJobs.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
};
export default SavedJobs;
