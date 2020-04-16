import React, {Component, useContext} from 'react';
import UserProfile from './UserProfile';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import PropTypes from 'prop-types';
import {AuthContext} from '../../context/AuthProvider';

const ALL_USERS = gql`
  {
    users {
      id
      name
      applicantProfile {
        id
        linkedin
        github
        appliedJobs {
          id
        }
        resume {
          fullname
        }
      }
      profileImage
    }
  }
`;
export default class UserProfileContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => {
          const loggedInUserId = user.id;
          return (
            <Query query={ALL_USERS}>
              {({data, loading, error}) => {
                if (loading) return <Loader />;
                if (error) return <Text>Error :(</Text>;
                const currentUser = data.users.filter((user) =>
                  loggedInUserId.includes(user.id),
                );
                return (
                  <UserProfile
                    navigation={this.props.navigation}
                    user={currentUser}
                    style={styles.container}
                  />
                );
              }}
            </Query>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
UserProfileContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
