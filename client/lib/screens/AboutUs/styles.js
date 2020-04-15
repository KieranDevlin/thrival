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
  section: {
    borderBottomWidth: 1,
    borderColor: '#D2D9E5',
    paddingBottom: 45,
  },
  text: {
    fontSize: 12,
    lineHeight: 25,
    marginBottom: 30,
    fontWeight: '400',
  },
  sign: {
    marginTop: 30,
    marginBottom: 0,
  },
});

export default styles;
