import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import SavedJobs from './SavedJobs';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

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

export default class SavedJobsContainer extends Component {
  render() {
    return (
      <Query query={ALL_JOBS}>
        {({data, error, loading}) => {
          if (loading) return <Loader />;
          if (error) return <Error name={'Saved Opportunities'} />;
          return (
            <SavedJobs
              navigation={this.props.navigation}
              jobs={data.jobPosts}
            />
          );
        }}
      </Query>
    );
  }
}

SavedJobsContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
