import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: 150,
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
  company: {
    fontWeight: 'bold',
  },
  title: {
    height: '50%',
  },
  disciplines: {
    fontSize: 16,
  },
  infoContainer: {
    height: '50%',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  fave: {
    alignItems: 'flex-end',
  },
});
export default styles;
