import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  addedToFaves: {
    width: Dimensions.get('window').width,
    backgroundColor: '#11185B',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
  },

  addText: {
    color: '#FBF7EF',
    fontSize: 18,
    marginHorizontal: 10,
  },
  scroll: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
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
    borderWidth: 1,
    borderColor: '#D2D9E5',
  },
  infoContainer: {
    width: Dimensions.get('window').width * 0.5,
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 16,
    fontWeight: '500',
  },
  h2: {
    fontSize: 16,
    fontWeight: '500',
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
    width: Dimensions.get('window').width * 0.3,
  },
  desc: {
    fontWeight: '400',
    fontSize: 12,
  },
});
export default styles;
