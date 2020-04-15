import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  Text,
} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-community/picker';

const AddJobPost = (props) => {
  const {
    updateEmployer,
    setIndustry,
    setLocation,
    setDiscipline,
    setTotalRoles,
    setDescription,
    setRate,
    industry,
    location,
    discipline,
    totalRoles,
    description,
    rate,
  } = props;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textInput}>
        <Text style={styles.header}>New Job Post</Text>
        <Text syle={styles.title}>Industry</Text>
        <TextInput
          placeholder="Enter the industry"
          placeholderTextColor="#2B2D42"
          selectionColor="#ED9421"
          style={styles.field}
          onChangeText={(value) => {
            setIndustry(value);
          }}
        />
        <Text syle={styles.title}>Location</Text>
        <TextInput
          placeholder="Enter the location"
          selectionColor="#ED9421"
          placeholderTextColor="#2B2D42"
          style={styles.field}
          onChangeText={(value) => {
            setLocation(value);
          }}
        />
        <Text syle={styles.title}>Rate of Pay</Text>
        <TextInput
          placeholder="Enter the rate of pay"
          selectionColor="#ED9421"
          placeholderTextColor="#2B2D42"
          style={styles.field}
          onChangeText={(value) => {
            if (/^\d+$/.test(value)) {
              setRate(value);
            }
          }}
        />
        <Text syle={styles.title}>Discriplines</Text>
        <TextInput
          placeholder="Enter the disciplines"
          selectionColor="#ED9421"
          placeholderTextColor="#2B2D42"
          style={styles.field}
          onChangeText={(value) => {
            setDiscipline(value);
          }}
        />
        <Text syle={styles.title}>Description</Text>
        <TextInput
          placeholder="Enter the description"
          selectionColor="#ED9421"
          placeholderTextColor="#2B2D42"
          style={styles.field}
          onChangeText={(value) => {
            setDescription(value);
          }}
        />
        <Text style={styles.title}>Number of Roles: {totalRoles}</Text>
        <Button title="Add Roles" />
        <Picker
          selectedValue={totalRoles}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setTotalRoles(itemValue)}>
          <Picker.Item label="1 Roles" value="1" />
          <Picker.Item label="2 Roles" value="2" />
          <Picker.Item label="3 Roles" value="3" />
          <Picker.Item label="4 Roles" value="4" />
          <Picker.Item label="5+ Roles" value="5+" />
        </Picker>
      </View>
      <Button
        title="Post"
        onPress={() => {
          updateEmployer();
        }}
      />
    </ScrollView>
  );
};

export default AddJobPost;
