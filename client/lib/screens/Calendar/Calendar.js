import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import {View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Calendar = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
};

Calendar.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};

export default Calendar;
