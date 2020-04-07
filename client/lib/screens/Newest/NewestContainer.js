import React, {Component} from 'react';
import Newest from './Newest';

export default class NewestContainer extends Component {
  render() {
    return (
      <Newest navigation={this.props.navigation} route={this.props.route} />
    );
  }
}
