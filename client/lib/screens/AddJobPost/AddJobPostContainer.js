import React, {Component} from 'react';
import AddJobPost from './AddJobPost';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';

const ALL_USERS = gql`
  query user($UserWhereUniqueInput: UserWhereUniqueInput!) {
    user(where: $UserWhereUniqueInput) {
      id
      name
      password
      applicantProfile {
        id
        email
        linkedin
        github
        appliedJobs {
          id
          createdAt
          industry
          location
          discipline
          totalRoles
        }
      }
    }
  }
`;

export default class AddJobPostContainer extends Component {
  render() {
    return (
      <Query
        query={ALL_USERS}
        variables={{UserWhereUniqueInput: {id: 'ck8rr4sbd009h0810wcw4r12u'}}}>
        {({data, loading, error}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return <AddJobPost />;
        }}
      </Query>
    );
  }
}

AddJobPostContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
