import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Text from '../../components/CustomText/CustomText';

const Application = ({application, route, navigation}) => {
  return <Text>Application List</Text>;
};
Application.propTypes = {
  application: PropTypes.array,
  route: PropTypes.object,
  navigation: PropTypes.object,
};
export default Application;
