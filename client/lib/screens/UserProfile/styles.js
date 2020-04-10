import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    paddingLeft: 30,
    paddingRight: 30,
  },
  profileContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 30,
    marginBottom: 25,
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
  },
  nameContainer: {
    alignSelf: 'flex-end',
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
  content: {
    marginBottom: 15,
  },
  section: {
    marginBottom: 15,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    width: '100%',
  },
});
export default styles;
