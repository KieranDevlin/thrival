import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  heading: {
    color: '#FBF7EF',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 125,
    minHeight: Dimensions.get('window').height - 200,
  },
  border: {
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
  resultheader: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  resultsContainer: {
    backgroundColor: '#FBF7EF',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 75,
    height: 75,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    flex: 1,
    width: 75,
  },
  title: {
    marginLeft: 10,
    fontFamily: 'Raleway-Bold',
  },
  titleContainer: {
    alignSelf: 'center',
    width: 275,
  },
});

export default styles;
