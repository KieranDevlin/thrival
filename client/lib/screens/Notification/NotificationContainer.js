import React, {Component} from 'react';
import Notification from './Notification';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
const ALL_NOTIFICATIONS = gql`
  {
    notifications {
      id
      timestamp
      announcement
    }
  }
`;
export default class NotificationContainer extends Component {
  render() {
    return <Notification navigation={this.props.navigation} />;
  }
}
