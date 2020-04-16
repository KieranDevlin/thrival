import React from 'react';
import Application from './Application';
import PropTypes from 'prop-types';

const ApplicationContainer = ({route, navigation}) => {
  return (
    <Application
      route={route}
      navigation={navigation}
      myApplications={route.params.myApplications}
    />
  );
};
ApplicationContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default ApplicationContainer;
