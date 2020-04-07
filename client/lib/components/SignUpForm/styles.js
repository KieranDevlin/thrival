import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    alignSelf: 'center',
    width: '90%',
    padding: 20,
    height: 450,
  },
  error: {
    alignSelf: 'center',
    color: '#000000',
  },
  formcontent: {
    backgroundColor: '#D84F48',
    padding: 10,
    borderRadius: 10,
  },
  textinput: {
    backgroundColor: '#FFFFFF',
    color: 'white',
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
    marginTop: 35,
    width: 340,
    backgroundColor: '#D84F48',
    borderRadius: 10,
    paddingVertical: 15,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
