import React, {useContext} from 'react';
import {TouchableOpacity, Linking, View} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error';
import PropTypes from 'prop-types';
import JobList from '../../components/JobList/JobList';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';

const Jobboard = ({navigation, jobs}) => {
  return (
    <FavesContext.Consumer>
      {(value) => (
        <>
          <View style={styles.container}>
            <Text style={styles.h1}>Latest Opportunities</Text>
            <JobList navigation={navigation} jobs={jobs} />
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

Jobboard.propTypes = {
  navigation: PropTypes.object,
  jobs: PropTypes.array,
};
export default Jobboard;
