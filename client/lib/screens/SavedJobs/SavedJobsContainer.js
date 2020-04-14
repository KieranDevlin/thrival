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
      <FavesContext.Consumer>
        {(value) =>
          value.faveIds.length > 0 ? (
            <Faves
              navigation={this.props.navigation}
              route={this.props.route}
              faveIds={value.faveIds}
            />
          ) : (
            <View style={styles.noFaves}>
              <CustomText>No Jobs Saved Yet</CustomText>
            </View>
          )
        }
      </FavesContext.Consumer>
    );
  }
}

SavedJobsContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
