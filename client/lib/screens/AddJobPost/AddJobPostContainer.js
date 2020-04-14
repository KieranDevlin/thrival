import React, {Component, useState} from 'react';
import AddJobPost from './AddJobPost';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
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

export default class AddJobPostContainer extends Component {
  render() {
    const [industry, setIndustry] = useState();
    const [location, setLocation] = useState();
    const [discipline, setDiscipline] = useState();
    const [totalRoles, setTotalRoles] = useState();
    const [rate, setRate] = useState();
    return (
      <Query
        query={UPDATE_JOBPOSTS}
        variables={{
          EmployerWhereUniqueInput: {id: 'ck8rr4sbd009h0810wcw4r12u'},
          EmployerUpdateInput: {
            data: {
              jobpostings: {
                createdAt,
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
        {({data, loading, error}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return (
            <AddJobPost
              setIndustry={setIndustry}
              setLocation={setLocation}
              setDiscipline={setDiscipline}
              setTotalRoles={setTotalRoles}
              setRate={setRate}
            />
          );
        }}
      </Query>
    );
  }
}

AddJobPostContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
