import React from 'react';
import Text from '../../components/CustomText';
import styles from './styles';
import moment from 'moment';
import {TouchableOpacity, Linking, View, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
const Job = ({job, faveIds, addFave, removeFave}) => {
  const renderDisciplines = (values) => {
    let str = '';
    for (let i = 0; i < values.length; i++) {
      if (i === values.length - 1) {
        str += values[i];
      } else {
        str += values[i] + ', ';
      }
    }
    return str;
  };

  const getDomain = (link) => {
    let domain;
    if (link.indexOf('://') > -1) {
      domain = link.slice(link.indexOf('://') + 3, -1);
    }
    return domain.slice(0, domain.indexOf('/'));
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scroll}>
      <View style={styles.jobPosting}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{
              uri: `https://logo.clearbit.com/${getDomain(job.contact.link)}`,
            }}
          />

          <View style={styles.infoContainer}>
            <Text style={styles.h1}>{renderDisciplines(job.discipline)}</Text>
            <Text style={styles.desc}>{job.location}</Text>
            <Text style={styles.desc}>{job.companyName}</Text>
            <Text style={styles.desc}>$20/hr</Text>
          </View>
        </View>

        <View style={styles.main}>
          <Text style={styles.h2}>Description</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text style={styles.h2}>Roles and Responsibilities</Text>

          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text style={styles.h2}>Recuirements</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.cta}>
            {faveIds.includes(job.id.toString()) ? (
              <TouchableOpacity
                onPress={() => {
                  removeFave(job.id.toString());
                }}>
                <Icon
                  style={styles.icon}
                  name="star"
                  size={50}
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
                  size={50}
                  color="#D2D9E5"
                />
              </TouchableOpacity>
            )}

            <Button
              onPress={() => {
                Linking.openURL(job.contact.link);
              }}
              style={styles.button}
              bgcolor={'#11185B'}
              label={'Apply'}
            />
          </View>
        </View>
        <Text>Posted {moment(job.posted).fromNow()}</Text>
        <TouchableOpacity
          style={styles.attribution}
          onPress={() => {
            Linking.openURL('https://clearbit.com');
          }}>
          <Text>Logos provided by Clearbit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Job;
