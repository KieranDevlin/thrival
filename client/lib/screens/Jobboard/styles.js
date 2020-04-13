import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  exploreContainer: {
    height: '100%',
    backgroundColor: '#FBF7EF',
    justifyContent: 'space-evenly',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 14,
  },
  themeContainer: {
    height: 110,
    marginLeft: 30,
  },
  themeButton: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
  speakerContainer: {
    height: 175,
    marginLeft: 30,
  },
  speakerCard: {
    height: 150,
    width: 100,
    marginRight: 10,
  },
  heading: {
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
  },
  seeAll: {
    color: '#3C3C3C',
  },
});

export default styles;
