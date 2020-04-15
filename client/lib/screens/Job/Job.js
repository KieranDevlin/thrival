import React from 'react';
import moment from 'moment';
import {
  TouchableOpacity,
  Linking,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../components/CustomText';
import styles from './styles';
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
    if (link.indexOf('://') > -1) {
      link.slice(link.indexOf('://') + 3, -1);
    }
    return link.slice(0, link.indexOf('/'));
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
              uri: `https://logo.clearbit.com/${getDomain(
                job.employer.contact.website,
              )}`,
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
          <Text style={styles.desc}>{job.description}</Text>

          <Text style={styles.h2}>Roles and Responsibilities</Text>

          <FlatList
            data={job.roles}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Text>- {item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />

          <Text style={styles.h2}>Recuirements</Text>

          <FlatList
            data={job.requirements}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Text>- {item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />

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
                Linking.openURL(job.employer.contact.website);
              }}
              style={styles.button}
              bgcolor={'#11185B'}
              label={'Apply'}
            />
          </View>
        </View>
        <Text>Posted {moment(job.createdAt).fromNow()}</Text>
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
