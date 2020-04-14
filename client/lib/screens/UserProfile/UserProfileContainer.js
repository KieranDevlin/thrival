import React, {Component} from 'react';
import UserProfile from './UserProfile';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import PropTypes from 'prop-types';

const ALL_USERS = gql`
  query Users {
    id
    name
  }
`;
export default class UserProfileContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => {
          console.log(user);
          const userid = user.id;
          // return (
          //   <Query
          //     query={ALL_USERS}
          //     variables={{UserWhereUniqueInput: {id: userid}}}>
          //     {({data, loading, error}) => {
          //       if (loading) return <Loader />;
          //       if (error) return <Text>Error :(</Text>;
          //       console.log(data);
          return (
            <UserProfile
              navigation={this.props.navigation}
              // user={data.user}
              style={styles.container}
            />
          );
          // }}
          //       </Query>
          //     );
        }}
      </UserContext.Consumer>
    );
  }
}
UserProfileContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
