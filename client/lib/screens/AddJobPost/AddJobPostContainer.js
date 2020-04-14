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
        description
      }
    }
  }
`;

const AddJobPostContainer = () => {
  const [industry, setIndustry] = useState('No Industry');
  const [location, setLocation] = useState('Remote');
  const [discipline, setDiscipline] = useState('No Discipline');
  const [totalRoles, setTotalRoles] = useState(1);
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState('No description');
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
              description,
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
            setDescription={setDescription}
            setRate={setRate}
            industry={industry}
            location={location}
            discipline={discipline}
            totalRoles={totalRoles}
            description={description}
            rate={rate}
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
