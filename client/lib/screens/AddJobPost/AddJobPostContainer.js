import React, {useState, Component} from 'react';
import AddJobPost from './AddJobPost';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Mutation} from '@apollo/react-components';
import ApolloClient, {gql} from 'apollo-boost';

const UPDATE_JOBPOSTS = gql`
  mutation updateEmployer(
    $EmployerUpdateInput: EmployerUpdateInput!
    $EmployerWhereUniqueInput: EmployerWhereUniqueInput!
  ) {
    updateEmployer(
      data: $EmployerUpdateInput
      where: $EmployerWhereUniqueInput
    ) {
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
const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/ivandaixivwork/thrival-covid19/dev',
});

const AddJobPostContainer = () => {
  const [industry, setIndustry] = useState('No Industry');
  const [location, setLocation] = useState('Remote');
  const [discipline, setDiscipline] = useState('No Discipline');
  const [totalRoles, setTotalRoles] = useState('1');
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState('No description');
  return (
    <Mutation
      mutation={UPDATE_JOBPOSTS}
      client={client}
      variables={{
        // This id will be changed to user id when getting user data is setup
        EmployerWhereUniqueInput: {id: 'ck91wu035s5iz0934mb0wjp0a'},
        EmployerUpdateInput: {
          jobpostings: {
            create: {
              rate,
              industry,
              location,
              discipline: {
                set: discipline,
              },
              totalRoles,
              description,
            },
          },
        },
      }}>
      {(updateEmployer, {data, error}) => {
        if (error) return <Text>Error :(</Text>;
        return (
          <AddJobPost
            updateEmployer={updateEmployer}
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
