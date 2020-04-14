import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  drawerContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    transform: [{translateY: 100}],
    position: 'absolute',
    zIndex: 999,
  },
  overlay: {
    height: Dimensions.get('window').height * 2,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 20,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
  },
  menu: {
    paddingBottom: 10,
    paddingLeft: 30,
  },
  menuItem: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Raleway-Regular',
    paddingTop: 15,
    paddingBottom: 15,
  },
  menuItemContainer: {
    flexDirection: 'row',
  },
  menuIcon: {
    marginRight: 20,
    transform: [{translateY: 1}],
  },
});

export default styles;
