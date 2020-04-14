import React, {Component} from 'react';
import Calendar from './Calendar';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import PropTypes from 'prop-types';

export default class CalendarContainer extends Component {
  render() {
    return (
      <Calendar navigation={this.props.navigation} route={this.props.route} />
    );
  }
}

CalendarContainer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};
