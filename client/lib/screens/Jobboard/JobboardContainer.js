import React, {Component} from 'react';
import Jobboard from './Jobboard';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import PropTypes from 'prop-types';

const ALL_JOBS = gql`
  {
    jobPosts {
      id
      createdAt
      rate
      industry
      location
      discipline
      totalRoles
      employer {
        id
        linkedin
        contact {
          id
          email
          website
        }
      }

      description
      roles
      requirements
    }
  }
`;

export default class JobboardContainer extends Component {
  render() {
    return (
      <Query query={ALL_JOBS}>
        {({data, error, loading}) => {
          if (loading) return <Loader />;
          if (error) return <Error name={'Opporunities'} />;
          if (data)
            return (
              <Jobboard
                navigation={this.props.navigation}
                jobs={data.jobPosts}
              />
            );
        }}
      </Query>
    );
  }
}

JobboardContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
