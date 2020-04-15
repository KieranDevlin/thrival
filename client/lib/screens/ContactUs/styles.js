import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 85,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 50,
    paddingTop: 30,
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  text: {
    fontSize: 12,
    lineHeight: 25,
    marginBottom: 30,
    fontWeight: '400',
  },
  additional: {
    color: '#1D1D1D',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
    marginBottom: 15,
    marginTop: 30,
  },
  emailContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    color: '#507EA2',
    textAlign: 'center',
  },
  website: {
    color: '#507EA2',
    transform: [{translateY: 4}],
    marginLeft: 10,
  },
  websiteContainer: {
    marginBottom: 15,
    flexDirection: 'row',
  },
});

export default styles;
