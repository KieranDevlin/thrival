import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ManageAccount = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Email</Text>
    </View>
  );
};
ManageAccount.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};
export default ManageAccount;
