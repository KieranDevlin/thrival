import React from 'react';
import {TouchableOpacity, View, SafeAreaView, Image} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import PropTypes from 'prop-types';
import TicketContainer from './TicketContainer';

const Ticket = ({route, navigation}) => {
  const ticket = route.params.ticket;
  return (
    <>
      <SafeAreaView style={styles.headerContainer}>
        <Text style={styles.header}>Ticket</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.close} name="close" size={25} color="#FBF7EF" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.ticket}>
        <View style={styles.qrcodeContainer}>
          {/* <Image
            style={styles.qrcode}
            source={require('../../assets/images/qr-code.png')}
          /> */}
        </View>
        <View style={styles.ticketInfo}>
          <Text style={styles.title}>VoiceStory Live</Text>
          <Text style={styles.title}>{ticket.title}</Text>
          <Text style={styles.date}>
            {moment(ticket.date).format('MMM Do YYYY')}
          </Text>
          <Text style={styles.time}>{ticket.time}</Text>
        </View>
      </View>
    </>
  );
};
Ticket.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};
export default Ticket;
