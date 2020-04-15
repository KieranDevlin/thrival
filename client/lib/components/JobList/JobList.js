import React from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import JobListItem from '../JobListItem';
import styles from './styles';
import Text from '../CustomText';

// TODO - remove dummy testing data once DB is finalized
// const data = require('./db.json');

const JobList = ({navigation, faveIds, jobs}) =>
  //check if faveIds are passed in props
  faveIds ? (
    //check if any existing faves
    faveIds.length > 0 ? (
      <ScrollView contentContainerStyle={styles.scroll}>
        {jobs.map(
          (job) =>
            faveIds.includes(job.id.toString()) && (
              <JobListItem key={job.id} job={job} navigation={navigation} />
            ),
        )}
      </ScrollView>
    ) : (
      <View style={styles.noFaves}>
        <Text>You dont have any saved opportunities!</Text>
      </View>
    )
  ) : (
    <ScrollView contentContainerStyle={styles.scroll}>
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} navigation={navigation} />
      ))}
    </ScrollView>
  );

JobList.propTypes = {
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array,
  jobs: PropTypes.array,
};

export default JobList;
