import React, {Component} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import CalendarPicker from 'react-native-calendar-picker';
import {View} from 'react-native';
import styles from './styles';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate
      ? selectedStartDate.format('LLLL').toString()
      : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#ED9421"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE: {startDate}</Text>
        </View>
      </View>
    );
  }
}

export default Calendar;
