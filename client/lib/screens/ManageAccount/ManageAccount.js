import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ManageAccount = ({route, navigation, faveIds}) => {
  return (
    <View style={styles.container}>
      <Text>Manage Account</Text>
    </View>
  );
};
ManageAccount.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
};
export default ManageAccount;
