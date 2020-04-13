import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#FBF7EF',
    fontSize: 18,
    fontFamily: 'Raleway-Bold',
    alignSelf: 'center',
    transform: [{translateY: -10}],
  },
  headerContainer: {
    backgroundColor: '#000000',
    height: 100,
  },
  heading: {
    color: '#FBF7EF',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    paddingRight: 30,
    paddingLeft: 30,
  },
  close: {
    marginLeft: 15,
  },
  border: {
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
});

export default styles;
