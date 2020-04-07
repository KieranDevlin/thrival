import React from 'react';
import {View} from 'react-native';
import EventCard from '../../components/EventCard';
import styles from './styles';
import PropTypes from 'prop-types';

const Events = ({events, route, navigation}) => {
  return <View style={styles.events}></View>;
};
Events.propTypes = {
  events: PropTypes.array,
  route: PropTypes.object,
  navigation: PropTypes.object,
};
export default Events;
