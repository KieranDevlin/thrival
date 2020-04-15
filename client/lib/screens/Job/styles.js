import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  scroll: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingBottom: 20,
  },
  jobPosting: {
    width: '85%',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').width * 0.3,
  },
  infoContainer: {
    width: Dimensions.get('window').width * 0.5,
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 16,
    fontWeight: '400',
  },
  h2: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 20,
  },
  listItem: {
    marginVertical: 8,
  },
  cta: {
    marginVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('window').width * 0.4,
  },
});
export default styles;
