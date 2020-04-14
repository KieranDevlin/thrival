import React, {useState} from 'react';
import {View, Image} from 'react-native';
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
    <View style={styles.searchContainer}>
      <View style={styles.headerContainer}>
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
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            margin: 0,
            borderRadius: 10,
            width: '100%',
            transform: [{translateX: 20}, {translateY: 10}],
          }}
          inputContainerStyle={{
            backgroundColor: '#FFFFFF',
            borderRadius: 5,
            width: '90%',
            margin: 0,
            borderWidth: 2,
            borderColor: '#D2D9E5',
          }}
          inputStyle={{
            color: '#2B2D42',
            fontSize: 15,
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
