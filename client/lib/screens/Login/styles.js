import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: '900',
    color: '#11185B',
    letterSpacing: 5,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '400',
    borderBottomWidth: 1,
    borderBottomColor: '#8D99AE',
    color: '#2B2D42',
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
    opacity: 0.9,
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
  signupText: {
    fontSize: 16,
    color: '#11185B',
    fontWeight: '400',
  },
  signupTextBold: {
    fontWeight: '500',
    color: '#ED9421',
  },
  logo: {
    position: 'absolute',
    opacity: 0.5,
    resizeMode: 'cover',
    transform: [{translateX: 6}, {scale: 0.75}],
  },
});

export default styles;
