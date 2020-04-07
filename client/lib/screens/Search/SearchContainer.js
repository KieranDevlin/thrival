import React, {Component} from 'react';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import Search from './Search';

const SEARCH = gql`
  {
    speakers {
      id
      profile_picture
      title
      linkedin
      facebook
      description
      owner {
        name
      }
    }
    events {
      id
      title
      description
      thumbnail_url
      date
      time
      location_name
      location_address
      price
    }
  }
`;
export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={SEARCH}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          return (
            <Search
              events={data.events}
              speakers={data.speakers}
              navigation={this.props.navigation}
              route={this.props.route}
            />
          );
        }}
      </Query>
    );
  }
}
