import React, {Component} from 'react';
import {View, LayoutAnimation} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../components/CustomText/CustomText';
import styles from './styles';
import PropTypes from 'prop-types';

class TopDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      toggleHandle: () => {
        this.setState({isOpen: !this.state.isOpen});
        LayoutAnimation.easeInEaseOut();
      },
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <>
        {this.state.isOpen ? (
          <>
            <View style={styles.drawerContainer}>
              <View style={styles.menu}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {screen: 'Settings'});
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {screen: 'About Us'});
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {screen: 'Contact Us'});
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {
                      screen: 'Privacy Policy',
                    });
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.setUser('guest');
                    navigation.navigate('Login');
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.state.toggleHandle()}>
              <View style={styles.overlay}></View>
            </TouchableOpacity>
          </>
        ) : null}
      </>
    );
  }
}
TopDrawer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TopDrawer;
