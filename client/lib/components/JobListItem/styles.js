import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.45,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderColor: '#D2D9E5',
    borderWidth: 2,
  },
  cardHeader: {
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: '110%',
    width: '50%',
    borderColor: '#D2D9E5',
    borderWidth: 1,
  },
  infoContainer: {
    height: '45%',
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 12,
    fontWeight: '400',
  },
  disciplines: {
    fontWeight: '400',
  },
  company: {
    fontWeight: '600',
  },
  icon: {
    transform: [{translateY: -5}],
  },
});
export default styles;
