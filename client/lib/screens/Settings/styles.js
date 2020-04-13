import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF7EF',
    height: Dimensions.get('window').height,
  },
  heading: {
    color: '#1D1D1D',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
  border: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default styles;
