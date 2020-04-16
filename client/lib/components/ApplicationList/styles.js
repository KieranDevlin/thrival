import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  center: {
    height: Dimensions.get('window').height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
