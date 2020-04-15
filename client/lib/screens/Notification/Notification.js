import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationsList from '../../components/NotificationsList';
import moment from 'moment';
import PropTypes from 'prop-types';

const Notification = ({navigation, notifications}) => {
  // let month = notifications.filter(
  //   (notification) =>
  //     moment(notification.timestamp).format('X') >
  //     moment().subtract(30, 'days').format('X'),
  // );

  // let week = month.filter(
  //   (notification) =>
  //     moment(notification.timestamp).format('X') >
  //     moment().subtract(7, 'days').format('X'),
  // );

  // let today = week.filter(
  //   (notification) =>
  //     moment(notification.timestamp).format('YYYY, d') ===
  //     moment().format('YYYY, d'),
  // );
  return (
    <>
      <ScrollView style={styles.container}></ScrollView>
    </>
  );
};
Notification.propTypes = {
  navigation: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
};
export default Notification;
