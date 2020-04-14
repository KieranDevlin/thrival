import React from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import JobListItem from '../JobListItem';
import styles from './styles';
import Text from '../CustomText';
const data = require('./db.json');

const JobList = ({navigation, faveIds}) =>
  //check if faveIds are passed in props
  faveIds ? (
    //check if any existing faves
    faveIds.length > 0 ? (
      <ScrollView contentContainerStyle={styles.scroll}>
        {data.employers.map(
          (job) =>
            faveIds.includes(job.id.toString()) && (
              <JobListItem key={job.id} job={job} navigation={navigation} />
            ),
        )}
      </ScrollView>
    ) : (
      <View style={styles.noFaves}>
        <Text>You dont have any favourite jobs!</Text>
      </View>
    )
  ) : (
    <ScrollView contentContainerStyle={styles.scroll}>
      {data.employers.map((job) => (
        <JobListItem key={job.id} job={job} navigation={navigation} />
      ))}
    </ScrollView>
  );

JobList.propTypes = {
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array,
};

export default JobList;
