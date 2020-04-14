import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Text from '../../components/CustomText/CustomText';
import ApplicationList from '../../components/ApplicationList';

const Application = ({application, route, navigation}) => {
  return (
    <View style={styles.main}>
      <ApplicationList />
    </View>
  );
};
Application.propTypes = {
  application: PropTypes.array,
  route: PropTypes.object,
  navigation: PropTypes.object,
};
export default Application;
