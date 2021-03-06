import React, {useState} from 'react';
import {View, ScrollView, TextInput, SafeAreaView, Button} from 'react-native';
import Text from '../../components/CustomText/CustomText';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Enter the industry"
          placeholderTextColor="#e3e3e3"
          selectionColor="#ED9421"
          style={styles.field}
          onChangeText={(value) => {
            setIndustry(value);
          }}
        />
        <TextInput
          placeholder="Enter the location"
          selectionColor="#ED9421"
          placeholderTextColor="#e3e3e3"
          style={styles.field}
          onChangeText={(value) => {
            setLocation(value);
          }}
        />
        <TextInput
          placeholder="Enter the rate of pay"
          selectionColor="#ED9421"
          placeholderTextColor="#e3e3e3"
          style={styles.field}
          onChangeText={(value) => {
            if (/^\d+$/.test(value)) {
              setRate(value);
            }
          }}
        />
        <TextInput
          placeholder="Enter the disciplines"
          selectionColor="#ED9421"
          placeholderTextColor="#e3e3e3"
          style={styles.field}
          onChangeText={(value) => {
            setDiscipline(value);
          }}
        />
        <TextInput
          placeholder="Enter the description"
          selectionColor="#ED9421"
          placeholderTextColor="#e3e3e3"
          style={styles.field}
          onChangeText={(value) => {
            setDescription(value);
          }}
        />

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
    </SafeAreaView>
  );
};

export default AddJobPost;
