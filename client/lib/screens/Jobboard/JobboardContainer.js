import React, {Component} from 'react';
import Jobboard from './Jobboard';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import PropTypes from 'prop-types';

export default class JobboardContainer extends Component {
  render() {
    return (
      <Jobboard navigation={this.props.navigation} route={this.props.route} />
    );
  }
}

JobboardContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
