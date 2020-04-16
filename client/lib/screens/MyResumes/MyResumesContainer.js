import React, {Component} from 'react';
import MyResumes from './MyResumes';
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
export default class MyResumesContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <MyResumes
        currentUser={this.props.route.params.currentUser}
        navigation={this.props.navigation}
        style={styles.container}
      />
    );
  }
}
MyResumesContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
