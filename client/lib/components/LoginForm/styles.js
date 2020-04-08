import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    alignSelf: 'center',
    width: '90%',
    padding: 20,
    marginBottom: 20,
  },
  error: {
    alignSelf: 'center',
    color: '#000000',
  },
  formcontent: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 10,
  },
  textinput: {
    backgroundColor: '#FFFFFF',
    color: '#3C3C3C',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  buttonbox: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 150,
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 15,
  },
  buttonLogin: {
    marginTop: 35,
    width: 340,
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 15,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
