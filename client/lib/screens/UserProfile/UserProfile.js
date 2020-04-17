import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../context/AuthProvider';
import PropTypes from 'prop-types';

const UserProfile = ({navigation, currentUser}) => {
  const {
    authContext: {signOutContext},
  } = React.useContext(AuthContext);

  currentUser = currentUser[0];
  const name = currentUser.name;
  const firstname = name.substr(0, name.indexOf(' '));
  const lastname = name.substr(name.indexOf(' ') + 1);

  return (
    <>
      <View style={styles.main}>
        <View style={styles.profileContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{firstname}</Text>
            <Text style={styles.name}>{lastname}</Text>
            <Text style={styles.occupation}>UX Designer</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/John-Smith.png')}
            />
          </View>
        </View>
        <View style={styles.profileMenu}>
          {currentUser.applicantProfile === null ? null : (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Saved Opportunities');
                }}
                style={[styles.menuItem, styles.borderTop]}>
                <View style={styles.menuName}>
                  <Icon
                    style={styles.icon}
                    name={'star'}
                    size={20}
                    color={'#2B2D42'}
                  />
                  <Text style={styles.menuTitle}>Saved Opportunities</Text>
                </View>
                <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() =>
                  navigation.navigate('Resumes', {currentUser: currentUser})
                }>
                <View style={styles.menuName}>
                  <Icon
                    style={styles.icon}
                    name={'file-document-edit'}
                    size={20}
                    color={'#2B2D42'}
                  />
                  <Text style={styles.menuTitle}>View My Resume</Text>
                </View>
                <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Application')}>
                <View style={styles.menuName}>
                  <Icon
                    style={styles.icon}
                    name={'file-multiple'}
                    size={20}
                    color={'#2B2D42'}
                  />
                  <Text style={styles.menuTitle}>View My Applications</Text>
                </View>
                <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
              </TouchableOpacity>
            </>
          )}
          {currentUser.employerProfile === null ? null : (
            <>
              <TouchableOpacity style={[styles.menuItem, styles.borderTop]}>
                <View style={styles.menuName}>
                  <Icon
                    style={styles.icon}
                    name={'file-plus'}
                    size={20}
                    color={'#2B2D42'}
                  />
                  <Text style={styles.menuTitle}>Add Job Post</Text>
                </View>
                <Icon name={'plus'} size={25} color={'#2B2D42'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuName}>
                  <Icon
                    style={styles.icon}
                    name={'file-multiple'}
                    size={20}
                    color={'#2B2D42'}
                  />
                  <Text style={styles.menuTitle}>View My Job Posts</Text>
                </View>
                <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuName}>
                  <Icon
                    style={styles.icon}
                    name={'account-group'}
                    size={20}
                    color={'#2B2D42'}
                  />
                  <Text style={styles.menuTitle}>View My Applicants</Text>
                </View>
                <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuName}>
              <Icon
                style={styles.icon}
                name={'account'}
                size={20}
                color={'#2B2D42'}
              />
              <Text style={styles.menuTitle}>View My Profile</Text>
            </View>
            <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Manage Account')}>
            <View style={styles.menuName}>
              <Icon
                style={styles.icon}
                name={'settings'}
                size={20}
                color={'#2B2D42'}
              />
              <Text style={styles.menuTitle}>Manage My Account</Text>
            </View>
            <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={signOutContext}>
            <View style={styles.menuName}>
              <Icon
                style={styles.icon}
                name={'logout'}
                size={20}
                color={'#2B2D42'}
              />
              <Text style={styles.menuTitle}>Logout</Text>
            </View>
            <Icon name={'chevron-right'} size={25} color={'#2B2D42'} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.profileMetaContainer}>
          <Text style={styles.heading}>UX Designer</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.heading}>Experience</Text>
          <Text style={styles.content}>UX Designer | 2015-2020</Text>
          <Text style={styles.content}>EA Studios | Vancouver, Canada</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.content}>Graphic Designer | 2013-2015</Text>
          <Text style={styles.content}>
            Open Road Auto Group | Vancouver, Canada
          </Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.content}>Graphic Design | 2009-2013</Text>
          <Text style={styles.content}>
            University of British Columbia | Vancouver, Canada
          </Text>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.heading}>Achievements</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View> */}
        <Text
          style={{
            textAlign: 'center',
            marginTop: 30,
            fontSize: 12,
          }}>
          Thrival © 2020
        </Text>
      </View>
    </>
  );
};
UserProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  user: PropTypes.object,
};

export default UserProfile;
