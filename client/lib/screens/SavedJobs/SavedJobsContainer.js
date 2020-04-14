import React, {Component} from 'react';
import SavedJobs from './SavedJobs';
import PropTypes from 'prop-types';

export default class SavedJobsContainer extends Component {
  render() {
    return (
      <SavedJobs navigation={this.props.navigation} route={this.props.route} />
    );
  }
}

SavedJobsContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
