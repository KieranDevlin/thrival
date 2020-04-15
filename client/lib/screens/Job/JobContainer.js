import React, {Component} from 'react';
import {View} from 'react-native';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Job from './Job';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const UPDATE_APPLICANT = gql`
  mutation updateApplicant(
    $data: ApplicantUpdateInput!
    $where: ApplicantWhereUniqueInput!
  ) {
    updateApplicant(data: $data, where: $where) {
      id
      appliedJobs {
        id
      }
    }
  }
`;

class JobContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      // <Mutation mutation={UPDATE_APPLICANT} variables={{data,where:}}>

      // </Mutation>
      <FavesContext.Consumer>
        {(value) => (
          <View style={styles.container}>
            <Job
              job={this.props.route.params.job}
              faveIds={value.faveIds}
              addFave={value.addFaveJob}
              removeFave={value.removeFaveJob}
            />
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default JobContainer;
