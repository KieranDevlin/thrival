import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 30,
    paddingRight: 30,
  },
  profileContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 15,
    marginBottom: 30,
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
    marginTop: 15,
  },
  content: {
    marginBottom: 10,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
  },
  entry: {
    marginTop: 10,
  },
  section: {
    borderBottomWidth: 1,
    borderColor: '#D2D9E5',
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: '#D2D9E5',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#2B2D42',
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    width: '100%',
  },
  menuItem: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#D2D9E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuName: {
    flexDirection: 'row',
    transform: [{translateY: 5}],
  },
  icon: {
    marginRight: 10,
    transform: [{translateY: -1}],
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: '#D2D9E5',
  },
  menuTitle: {
    fontWeight: '500',
  },
  occupation: {
    fontWeight: '500',
    fontStyle: 'italic',
    letterSpacing: 3,
  },
});
export default styles;
