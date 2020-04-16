import React, {Component} from 'react';
import Resume from './Resume';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import PropTypes from 'prop-types';

export default class ResumeContainer extends Component {
  render() {
    return (
      <Resume
        navigation={this.props.navigation}
        resume={this.props.route.params.resume}
        style={styles.container}
      />
    );
  }
}
ResumeContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
