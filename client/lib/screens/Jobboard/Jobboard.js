import React from 'react';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error';
import PropTypes from 'prop-types';

const Jobboard = ({navigation, route, speakers}) => {
  return (
    <>
      <Text>Latest Job Listings</Text>
      <Text>Recently Viewed</Text>
      <Text>Watching</Text>
    </>
  );
};

Jobboard.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  speakers: PropTypes.array,
};
export default Jobboard;
