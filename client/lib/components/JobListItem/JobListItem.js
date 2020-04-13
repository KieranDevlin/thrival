import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../CustomText';
import styles from './styles';
import moment from 'moment';
// import {mapKey} from '../../apiKeys';
import openMap from 'react-native-open-maps';

const JobList = ({job, navigation, faveIds, addFave, removeFave}) => {
  // const renderDisciplines = (values) => {
  //   let str = '';
  //   for (let i = 0; i < values.length; i++) {
  //     if (i === values.length - 1) {
  //       str += values[i];
  //     } else {
  //       str += values[i] + ', ';
  //     }
  //   }
  //   return str;
  // };

  //   const getMap = async (address) => {
  //     try {
  //       const resp = await fetch(
  //         `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${mapKey}`,
  //       );
  //       const data = await resp.json();
  //       openMap({
  //         latitude: data.results[0].geometry.location.lat,
  //         longitude: data.results[0].geometry.location.lng,
  //         query: data.results[0].formatted_address,
  //       });
  //     } catch (e) {
  //       throw new Error(e);
  //     }
  //   };

  const getDomain = (link) => {
    let domain;
    if (link.indexOf('://') > -1) {
      domain = link.slice(link.indexOf('://') + 3, -1);
    }
    return domain.slice(0, domain.indexOf('/'));
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Job', {job});
      }}
      style={styles.container}>
      <View style={styles.cardHeader}>
        <Image
          source={{
            uri: `https://logo.clearbit.com/${getDomain(job.contact.link)}`,
          }}
          style={styles.image}
        />
        {faveIds.includes(job.id.toString()) ? (
          <TouchableOpacity
            onPress={() => {
              removeFave(job.id);
            }}>
            <Icon style={styles.icon} name="heart" size={30} color="#11185B" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              addFave(job.id);
            }}>
            <Icon
              style={styles.icon}
              name="heart-outline"
              size={30}
              color="#11185B"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.disciplines}>
          {/* {renderDisciplines(job.discipline)} */}
          {job.discipline[0]}
        </Text>
        <Text style={styles.company}>{job.companyName}</Text>

        <TouchableOpacity
          onPress={() => {
            // getMap(`${job.companyName}, ${job.location}`);
          }}
          style={styles.info}>
          <Text style={styles.smallText}>{job.location}</Text>
        </TouchableOpacity>
        <Text style={styles.smallText}>$30/hr</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobList;
