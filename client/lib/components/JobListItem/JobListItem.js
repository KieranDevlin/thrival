import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
// import openMap from 'react-native-open-maps';
// import {mapKey} from '../../apiKeys';
import Text from '../CustomText';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';

const JobListItem = ({job, navigation}) => {
  // TODO - function may not be necessary if DB changes
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

  // TODO - everyone needs key for Google Geocoder API
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
    if (link.indexOf('://') > -1) {
      link.slice(link.indexOf('://') + 3, -1);
    }
    return link.slice(0, link.indexOf('/'));
  };

  return (
    <FavesContext.Consumer>
      {(value) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Opportunity', {job});
          }}
          style={styles.container}>
          <View style={styles.cardHeader}>
            <Image
              source={{
                uri: `https://logo.clearbit.com/${getDomain(
                  job.employer.contact.website,
                )}`,
              }}
              style={styles.image}
            />
            {value.faveIds.includes(job.id.toString()) ? (
              <TouchableOpacity
                onPress={() => {
                  value.removeFaveJob(job.id);
                }}>
                <Icon
                  style={styles.icon}
                  name="star"
                  size={30}
                  color="#5877DD"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  value.addFaveJob(job.id);
                }}>
                <Icon
                  style={styles.icon}
                  name="star-outline"
                  size={30}
                  color="#5877DD"
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.disciplines}>{job.roles[0]}</Text>
            <Text style={styles.company}>{job.companyName}</Text>

            <TouchableOpacity
              onPress={() => {
                // opens IOS maps with company location using Google Geocoder
                // needs API key
                // getMap(`${job.companyName}, ${job.location}`);
              }}
              style={styles.info}>
              <Text style={styles.smallText}>{job.location}</Text>
            </TouchableOpacity>
            <Text style={styles.smallText}>${job.rate}/hr</Text>
          </View>
        </TouchableOpacity>
      )}
    </FavesContext.Consumer>
  );
};
JobListItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired,
};
export default JobListItem;
