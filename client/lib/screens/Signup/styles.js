import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  header: {
    marginBottom: 40,
    fontSize: 25,
    fontWeight: '900',
    color: '#11185B',
    letterSpacing: 5,
    alignSelf: 'center',
  },
  inputTitle: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 25,
    color: '#2B2D42',
    fontWeight: '400',
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#D2D9E5',
    margin: 15,
    color: '#2B2D42',
    width: Dimensions.get('window').width - 40,
    padding: 8,
    backgroundColor: '#EEF2F7',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 5,
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    margin: 50,
    backgroundColor: '#11185B',
  },
  btnText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
    padding: 10,
    alignSelf: 'center',
  },
});

export default styles;
