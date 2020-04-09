// import React from 'react';
// import {TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Text from '../CustomText';
// import styles from './styles';
// import moment from 'moment';
// import {mapKey} from '../../apiKeys';
// import openMap from 'react-native-open-maps';

// const JobList = ({job, navigation, faveIds, addFave, removeFave}) => {
//   const renderDisciplines = (values) => {
//     let str = '';
//     for (let i = 0; i < values.length; i++) {
//       if (i === values.length - 1) {
//         str += values[i];
//       } else {
//         str += values[i] + ', ';
//       }
//     }
//     return str;
//   };

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
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.navigate('Job', {job});
//       }}
//       style={styles.container}>
//       <View style={styles.title}>
//         <Text style={styles.disciplines}>
//           {renderDisciplines(job.discipline)}
//         </Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <View>
//           <View style={styles.center}>
//             <View style={styles.info}>
//               <Text>
//                 <Icon
//                   style={styles.icon}
//                   name="store"
//                   size={30}
//                   color="#ED9421"
//                 />
//               </Text>
//               <Text style={styles.company}> {job.companyName}</Text>
//             </View>

//             {faveIds.includes(job.id.toString()) ? (
//               <TouchableOpacity
//                 onPress={() => {
//                   removeFave(job.id);
//                 }}>
//                 <Icon
//                   style={styles.icon}
//                   name="heart"
//                   size={30}
//                   color="#ED9421"
//                 />
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity
//                 onPress={() => {
//                   addFave(job.id);
//                 }}>
//                 <Icon
//                   style={styles.icon}
//                   name="heart-outline"
//                   size={30}
//                   color="#ED9421"
//                 />
//               </TouchableOpacity>
//             )}
//           </View>

//           <View style={styles.center}>
//             <TouchableOpacity
//               onPress={() => {
//                 getMap(`${job.companyName}, ${job.location}`);
//               }}
//               style={styles.info}>
//               <Text>
//                 <Icon
//                   style={styles.icon}
//                   name="map-marker"
//                   size={30}
//                   color="#ED9421"
//                 />
//               </Text>
//               <Text style={styles.center}> {job.location}</Text>
//             </TouchableOpacity>
//             <Text>{moment(job.posted).fromNow()}</Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default JobList;
