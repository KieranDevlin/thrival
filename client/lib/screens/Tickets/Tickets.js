import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import {View} from 'react-native';
import styles from './styles';
import EventCard from '../../components/EventCard';
import PropTypes from 'prop-types';

const Tickets = ({navigation, route, ticketOwner}) => {
  return <Text>Tickets</Text>;
};

Tickets.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
  ticketOwner: PropTypes.arrayOf(PropTypes.object),
};

export default Tickets;
