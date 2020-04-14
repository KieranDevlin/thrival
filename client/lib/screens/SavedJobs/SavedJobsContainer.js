import React, {Component} from 'react';
import {View} from 'react-native';
import CustomText from '../../components/CustomText';
import {FavesContext} from '../../context/FavesContext';
import SavedJobs from './SavedJobs';
import styles from './styles';
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
