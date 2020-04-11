import React, {Component} from 'react';
import Job from './Job';
import {View} from 'react-native';
import styles from './styles';
import {FavesContext} from '../../context/FavesContext';
class JobContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FavesContext.Consumer>
        {(value) => (
          <View style={styles.container}>
            <Job
              // job={this.props.route.params.job}
              faveIds={value.faveIds}
              addFave={value.addFaveJob}
              removeFave={value.removeFaveJob}
            />
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default JobContainer;
