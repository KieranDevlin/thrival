import React from 'react';
import Text from '../../components/CustomText';
import styles from './styles';
import moment from 'moment';
import {TouchableOpacity, Linking, View, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Job = ({job, faveIds, addFave, removeFave}) => {
  const getDomain = (link) => {
    let domain;
    if (link.indexOf('://') > -1) {
      domain = link.slice(link.indexOf('://') + 3, -1);
    }
    return domain.slice(0, domain.indexOf('/'));
  };
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Image
        style={styles.logo}
        source={{
          uri: `https://logo.clearbit.com/${getDomain(job.contact.link)}`,
        }}
      />
      <View style={styles.jobPosting}>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.h1}>{job.companyName}</Text>
            {faveIds.includes(job.id.toString()) ? (
              <TouchableOpacity
                onPress={() => {
                  removeFave(job.id.toString());
                }}>
                <Icon
                  style={styles.icon}
                  name="star"
                  size={32}
                  color="#ED9421"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  addFave(job.id.toString());
                }}>
                <Icon
                  style={styles.icon}
                  name="star-outline"
                  size={32}
                  color="#ED9421"
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.info}>
            <Text style={styles.h2}>{job.location}</Text>
            <Text style={styles.h2}>{moment(job.posted).fromNow()}</Text>
          </View>
        </View>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={styles.desc}>
          <Text>To find out more, check out their website @ </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(job.contact.link);
            }}>
            <Text>{job.contact.link}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Job;
