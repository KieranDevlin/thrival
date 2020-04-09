import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../context/AuthProvider';
import PropTypes from 'prop-types';

const UserProfile = ({navigation, user}) => {
  const {
    authContext: {signOutContext},
  } = React.useContext(AuthContext);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderRadius: 5,
          width: 100,
        }}
        onPress={signOutContext}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
UserProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  user: PropTypes.array,
};

export default UserProfile;
