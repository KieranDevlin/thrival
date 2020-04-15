import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Text from '../../components/CustomText/CustomText';
import ApplicationList from '../../components/ApplicationList';

const Application = ({application, route, navigation}) => {
  return (
    <ScrollView style={styles.main}>
      <ApplicationList />
    </ScrollView>
  );
};
Application.propTypes = {
  application: PropTypes.array,
  route: PropTypes.object,
  navigation: PropTypes.object,
};
export default Application;
