import React from 'react';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

const Jobboard = ({navigation, route}) => {
  return (
    <>
      <Text>Latest Job Listings</Text>
      <Text>Recently Viewed</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Job')}>
        <Text>Watching</Text>
      </TouchableOpacity>
    </>
  );
};

Jobboard.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  speakers: PropTypes.array,
};
export default Jobboard;
