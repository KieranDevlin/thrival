import React, {Component} from 'react';
import Resume from './Resume';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import PropTypes from 'prop-types';

const ALL_USERS = gql`
  query Users {
    id
    name
  }
`;
export default class ResumeContainer extends Component {
  render() {
    // return (
    //   <UserContext.Consumer>
    //     {({user}) => {
    //       const userid = user.id;
    // return (
    //   <Query
    //     query={ALL_USERS}
    //     variables={{UserWhereUniqueInput: {id: userid}}}>
    //     {({data, loading, error}) => {
    //       if (loading) return <Loader />;
    //       if (error) return <Text>Error :(</Text>;
    //       console.log(data);
    return (
      <Resume
        navigation={this.props.navigation}
        // user={data.user}
        style={styles.container}
      />
    );
    // }}
    //       </Query>
    //     );
    //   }}
    // </UserContext.Consumer>
    // );
  }
}
ResumeContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
