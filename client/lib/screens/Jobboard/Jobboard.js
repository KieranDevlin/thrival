import React, {useContext} from 'react';
import {TouchableOpacity, Linking, View, ScrollView} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error';
import PropTypes from 'prop-types';
import JobList from '../../components/JobList/JobList';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';

const Jobboard = ({navigation, route}) => {
  return (
    <FavesContext.Consumer>
      {(value) => (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <Text style={styles.h1}>Latest Opportunities</Text>
            <JobList navigation={navigation} />
            <TouchableOpacity
              style={styles.attribution}
              onPress={() => {
                Linking.openURL('https://clearbit.com');
              }}>
              <Text>Logos provided by Clearbit</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </FavesContext.Consumer>
  );
};

Jobboard.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
export default Jobboard;
