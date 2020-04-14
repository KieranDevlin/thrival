import React, {useState} from 'react';
import AddJobPost from './AddJobPost';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';

const UPDATE_JOBPOSTS = gql`
  mutation updateEmployer(
    $data: EmployerUpdateInput!
    $where: EmployerWhereUniqueInput!
  ) {
    updateEmployer(data: $data, where: $where) {
      jobpostings {
        createdAt
        industry
        location
        discipline
        totalRoles
        rate
      }
    }
  }
`;

const AddJobPostContainer = () => {
  const [industry, setIndustry] = useState();
  const [location, setLocation] = useState();
  const [discipline, setDiscipline] = useState();
  const [totalRoles, setTotalRoles] = useState();
  const [rate, setRate] = useState();
  return (
    <Mutation
      mutation={UPDATE_JOBPOSTS}
      variables={{
        // This id will be changed to user id when getting user data is setup
        EmployerWhereUniqueInput: {id: 'ck8z1x9e8705s09816ly7r2ac'},
        EmployerUpdateInput: {
          data: {
            jobpostings: {
              industry,
              location,
              discipline: {
                set: discipline,
              },
              totalRoles,
              rate,
            },
          },
        },
      }}>
      {(addJobPost, {data, error}) => {
        if (error) return <Text>Error :(</Text>;
        return (
          <AddJobPost
            addJobPost={addJobPost}
            setIndustry={setIndustry}
            setLocation={setLocation}
            setDiscipline={setDiscipline}
            setTotalRoles={setTotalRoles}
            setRate={setRate}
          />
        );
      }}
    </Mutation>
  );
};
export default AddJobPostContainer;

AddJobPostContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
