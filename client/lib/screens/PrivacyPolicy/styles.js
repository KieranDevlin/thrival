import {StyleSheet, Dimensions} from 'react-native';

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
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
    paddingTop: 15,
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 15,
  },
  section: {
    borderBottomWidth: 1,
    borderColor: '#D2D9E5',
  },
  text: {
    fontSize: 12,
    lineHeight: 25,
    marginBottom: 15,
    fontWeight: '400',
  },
});

export default styles;
