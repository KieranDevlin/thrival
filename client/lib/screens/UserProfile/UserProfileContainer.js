import React, {Component} from 'react';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import styles from './styles';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';

const USER_WHERE_UNIQUE_ID = gql`
  query user($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      name
      email
      profileImage
      applicantProfile {
        id
        linkedin
        github
        appliedJobs {
          id
          createdAt
          rate
          industry
          location
          discipline
          totalRoles
          description
          roles
          requirements
          employer {
            id
            linkedin
            contact {
              id
              email
              website
            }
          }
          id
        }
        resume {
          id
          fullname
          address
          email
          phone
          experience {
            id
            jobTitle
          }
          education {
            id
            credential
            school
          }
          skills
        }
      }
    }
  }
`;
export default class UserProfileContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => {
          return (
            <Query
              query={USER_WHERE_UNIQUE_ID}
              variables={{where: {id: user.id}}}>
              {({data, loading, error}) => {
                if (loading) return <Loader />;
                if (error) return <Text>Error :(</Text>;
                return (
                  <UserProfile
                    navigation={this.props.navigation}
                    user={data.user}
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
