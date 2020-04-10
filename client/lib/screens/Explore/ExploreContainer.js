import React, {Component} from 'react';
import Explore from './Explore';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import PropTypes from 'prop-types';

export default class ExploreContainer extends Component {
  render() {
    return (
      <Explore navigation={this.props.navigation} route={this.props.route} />
    );
  }
}

ExploreContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
