import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import {View, Image} from 'react-native';
import styles from './styles';

const Home = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.images}></View>
      <LoginForm navigation={navigation} route={route} />
    </View>
  );
};
Home.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Home;
