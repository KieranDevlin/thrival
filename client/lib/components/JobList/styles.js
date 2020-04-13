import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    paddingHorizontal: 15,
  },
});
export default styles;
