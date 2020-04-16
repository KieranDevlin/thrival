import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ApplicationList from '../../components/ApplicationList';

const Application = ({navigation, myApplications}) => {
  return (
    <ScrollView style={styles.main}>
      <ApplicationList
        myApplications={myApplications}
        navigation={navigation}
      />
    </ScrollView>
  );
};
Application.propTypes = {
  navigation: PropTypes.object,
  myApplications: PropTypes.array,
};
export default Application;
