import React from 'react';
import JobListItem from '../JobListItem';
import {ScrollView} from 'react-native';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';
const data = require('./db.json');
const JobList = ({navigation}) => {
  return (
    <FavesContext.Consumer>
      {(value) => (
        <ScrollView contentContainerStyle={styles.scroll}>
          {data.employers.map((job) => (
            <JobListItem
              key={job.id}
              job={job}
              navigation={navigation}
              faveIds={value.faveIds}
              addFave={value.addFaveJob}
              removeFave={value.removeFaveJob}
            />
          ))}
        </ScrollView>
      )}
    </FavesContext.Consumer>
  );
};

export default JobList;
