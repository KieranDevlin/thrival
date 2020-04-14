import React from 'react';
import styles from './styles';
import Text from '../CustomText/CustomText';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default Button = ({style, label, onPress, bgcolor, icon}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, {backgroundColor: `${bgcolor}`}]}
      onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  labe: PropTypes.string,
  onPress: PropTypes.func,
  icon: PropTypes.object,
};
