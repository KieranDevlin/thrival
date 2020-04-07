import React from 'react';
import Text from '../../components/CustomText/CustomText';
import Error from '../../components/Error/';
import PropTypes from 'prop-types';

const Explore = ({navigation, route, speakers}) => {
  speakers = speakers.filter((user) => user.isSpeaker != null);
  return <Text>Explore</Text>;
};

Explore.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  speakers: PropTypes.array,
};
export default Explore;
