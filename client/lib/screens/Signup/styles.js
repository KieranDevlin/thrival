import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginLeft: 100,
    marginBottom: 40,
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  inputTitle: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 25,
    color: 'white',
    fontWeight: '400',
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    margin: 25,
    color: 'white',
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    width: 120,
    alignSelf: 'center',
    margin: 50,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    padding: 10,
    alignSelf: 'center',
  },
});

export default styles;
