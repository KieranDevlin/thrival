import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  scroll: {
    width: Dimensions.get('window').width,
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    height: '25%',
    width: '100%',
  },
  jobPosting: {
    width: '90%',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  h2: {
    fontSize: 22,
  },
  infoContainer: {
    marginVertical: 18,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  desc: {
    marginVertical: 18,
  },
});
export default styles;
