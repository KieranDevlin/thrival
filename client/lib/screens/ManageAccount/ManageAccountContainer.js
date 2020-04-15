import React, {Component} from 'react';
import {View} from 'react-native';
import CustomText from '../../components/CustomText';
import {FavesContext} from '../../context/FavesContext';
import ManageAccount from './ManageAccount';
import styles from './styles';
import PropTypes from 'prop-types';

export default class ManageAccountContainer extends Component {
  render() {
    return <ManageAccount />;
  }
}

ManageAccountContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
