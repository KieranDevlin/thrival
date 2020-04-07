import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  LayoutAnimation,
} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import moment from 'moment';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const Checkout = ({event, navigation}) => {
  const [unit, setUnit] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const updateUnit = (unit) => {
    setUnit(unit);
  };
  const toggleHandle = () => {
    setIsOpen(!isOpen);
    LayoutAnimation.easeInEaseOut();
  };
  return <Text>Checkout</Text>;
};
Checkout.propTypes = {
  event: PropTypes.object,
  navigation: PropTypes.object,
};
export default Checkout;
