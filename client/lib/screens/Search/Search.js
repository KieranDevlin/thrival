import React, {useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import {SearchBar} from 'react-native-elements';
import PropTypes from 'prop-types';

const Search = ({events, speakers, navigation}) => {
  const [search, setSearch] = useState(null);
  const updateSearch = (search) => {
    search === '' ? setSearch(null) : setSearch(search.toLowerCase());
  };

  // //events
  // const eventResults = events.filter((event) =>
  //   event.title.toLowerCase().match(search),
  // );
  // const eventTitle = eventResults.map((event) => event.title);

  // //speakers
  // const speakerResults = speakers.filter((speaker) =>
  //   speaker.owner.name.toLowerCase().match(search),
  // );
  // const speakerName = speakerResults.map((speaker) => speaker.owner.name);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search..."
          onChangeText={(value) => updateSearch(value)}
          value="Search"
          autoCorrect={false}
          autoCompleteType="name"
          searchIcon={null}
          clearIcon={{
            color: '#2B2D42',
          }}
          containerStyle={{
            backgroundColor: '#FFF',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            margin: 0,
            borderRadius: 50,
            width: Dimensions.get('window').width - 54,
            height: 30,
          }}
          inputContainerStyle={{
            backgroundColor: '#FFF',
            borderRadius: 50,
            width: Dimensions.get('window').width - 54,
            margin: 0,
            height: 30,
          }}
          inputStyle={{
            color: '#2B2D42',
            fontSize: 12,
            fontFamily: 'Raleway-Regular',
            fontWeight: '500',
          }}
          placeholderTextColor="#2B2D42"
        />
      </View>
    </View>
  );
};
Search.propTypes = {
  navigation: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  speakers: PropTypes.array.isRequired,
};
export default Search;
