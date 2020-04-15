import React from 'react';
import styles from './styles';
import Text from '../CustomText/CustomText';
import {TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

export default Button = ({style, label, onPress, bgcolor, icon}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, {backgroundColor: `${bgcolor}`}]}
      onPress={onPress}>
      <LinearGradient
        colors={['#5877DD', '#11185B']}
        start={{x: 0, y: 4}}
        end={{x: 1, y: 0}}
        style={[StyleSheet.absoluteFill, {height: 'auto', width: 'auto'}]}
      />
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
