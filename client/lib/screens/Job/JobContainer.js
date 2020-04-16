import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import PropTypes from 'prop-types';
import Job from './Job';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';
import {UserContext} from '../../context/UserContext';
import {USER_WHERE_UNIQUE_ID} from '../UserProfile';

const UPDATE_APPLICATIONS = gql`
  mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
      applicantProfile {
        id
        appliedJobs {
          id
          createdAt
          rate
          industry
          location
          discipline
          employer {
            id
            linkedin
            contact {
              id
              email
              website
            }
          }
        }
      }
    }
  }
`;

const JobContainer = ({route}) => {
  const {job} = route.params;
  const {user} = useContext(UserContext);
  const [jobId, setJobId] = useState('');
  return (
    <FavesContext.Consumer>
      {(value) => (
        <Mutation
          mutation={UPDATE_APPLICATIONS}
          refetchQueries={USER_WHERE_UNIQUE_ID}
          variables={{
            data: {
              applicantProfile: {
                update: {
                  appliedJobs: {
                    connect: {
                      id: jobId,
                    },
                  },
                },
              },
            },
            where: {
              id: user.id,
            },
          }}>
          {(updateApplications, {error, data}) => {
            return (
              <View style={styles.container}>
                <Job
                  job={job}
                  faveIds={value.faveIds}
                  addFave={value.addFaveJob}
                  removeFave={value.removeFaveJob}
                  updateApplications={updateApplications}
                  setJobId={setJobId}
                  data={data}
                  error={error}
                />
              </View>
            );
          }}
        </Mutation>
      )}
    </FavesContext.Consumer>
  );
};
JobContainer.propTypes = {
  route: PropTypes.object,
};
export default JobContainer;
