import React from 'react';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error/';
import PropTypes from 'prop-types';
import JobList from '../../components/JobList';

const Explore = ({navigation, route, speakers}) => {
  speakers = speakers.filter((user) => user.isSpeaker != null);
  return (
    <>
      <JobList navigation={navigation} />
    </>
  );
};

Explore.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  speakers: PropTypes.array,
};
export default Explore;
