import React from 'react';
import {TouchableOpacity, Linking, View} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import PropTypes from 'prop-types';
import JobList from '../../components/JobList/JobList';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';

const SavedJobs = ({navigation, jobs}) => {
  return (
    <FavesContext.Consumer>
      {(value) => (
        <>
          <View style={styles.container}>
            <Text style={styles.h1}>Saved Opportunities</Text>
            <JobList
              navigation={navigation}
              faveIds={value.faveIds}
              jobs={jobs}
            />
          </View>
          <TouchableOpacity
            style={styles.attribution}
            onPress={() => {
              Linking.openURL('https://clearbit.com');
            }}>
            <Text>Logos provided by Clearbit</Text>
          </TouchableOpacity>
        </>
      )}
    </FavesContext.Consumer>
  );
};

SavedJobs.propTypes = {
  navigation: PropTypes.object,
  jobs: PropTypes.array,
};
export default SavedJobs;
