import React from 'react';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error';
import PropTypes from 'prop-types';
import JobList from '../../components/JobList/JobList';

const Jobboard = ({navigation, route}) => {
  return (
    <>
      <Text>Latest Job Listings</Text>
      <JobList navigation={navigation} />
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
