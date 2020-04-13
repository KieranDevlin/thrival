import React, {Component} from 'react';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Application from './Application';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';

export default class ApplicationContainer extends Component {
  render() {
    return (
      <Application
        route={this.props.route}
        navigation={this.props.navigation}
      />
    );
  }
}
ApplicationContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
