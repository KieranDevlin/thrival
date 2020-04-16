import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  textInput: {
    padding: 20,
    minHeight: 300,
  },
  header: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: '900',
    color: '#11185B',
    letterSpacing: 5,
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Raleway-Light',
    color: '#2B2D42',
    fontSize: 24,
    fontWeight: '800',
  },
  field: {
    justifyContent: 'flex-start',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#D2D9E5',
    margin: 15,
    color: '#2B2D42',
    width: Dimensions.get('screen').width - 80,
    padding: 8,
    backgroundColor: '#EEF2F7',
  },
  picker: {
    alignSelf: 'center',
    position: 'relative',
    width: 200,
  },
  button: {
    borderRadius: 5,
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    margin: 50,
    backgroundColor: '#11185B',
  },
});

export default styles;
