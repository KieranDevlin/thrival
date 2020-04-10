import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  drawerContainer: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    transform: [{translateY: 100}],
    position: 'absolute',
    // zIndex: 999,
  },
  // overlay: {
  //   height: Dimensions.get('window').height * 2,
  //   width: Dimensions.get('window').width,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  menu: {
    backgroundColor: '#FFFFFF',
    paddingRight: 30,
    paddingLeft: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  border: {
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
  },
  menuItem: {
    textAlign: 'right',
    color: '#FBF7EF',
    fontSize: 18,
    fontFamily: 'Raleway-Bold',
    borderBottomWidth: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default styles;
