import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#D2D9E5',
  },
  employer: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 5,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    flex: 1,
  },
  employerInfo: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  jobTitle: {
    fontWeight: '400',
  },
  company: {
    fontSize: 12,
    fontWeight: '400',
  },
  location: {
    fontWeight: '400',
    fontSize: 12,
  },
  status: {
    fontWeight: '400',
    color: '#FFFFFF',
    fontSize: 12,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    paddingLeft: 10,
    textAlign: 'center',
  },
  applied: {
    backgroundColor: '#2B2D42',
  },
  pending: {
    backgroundColor: '#ED9421',
  },
  interview: {
    backgroundColor: '#5877DD',
  },
  borderRadius: {
    borderRadius: 3,
    overflow: 'hidden',
    width: 75,
  },
});

export default styles;
