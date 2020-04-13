import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.45,
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor: '#8D99AE',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  cardHeader: {
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '50%',
  },
  infoContainer: {
    height: '45%',
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 12,
  },
});
export default styles;
