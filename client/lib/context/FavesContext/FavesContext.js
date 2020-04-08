import React, {createContext, Component} from 'react';
import {addFave, removeFave, allFaves} from '../../../config/models';
import PropTypes from 'prop-types';

export const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  getAllFaveJobs = async () => {
    try {
      const faves = await allFaves();
      const ids = faves.map((fave) => fave[0]);
      this.setState({faveIds: ids});
    } catch (e) {
      throw new Error('There was an error finding your favourite Jobs');
    }
  };

  addFaveJob = async (faveId) => {
    try {
      const newFave = await addFave(faveId);
      if (newFave) {
        this.setState({
          faveIds: {faveIds: [...this.state.faveIds, newFave.id]},
        });
      }
      this.getAllFaveJobs();
    } catch (e) {
      throw new Error('There was an error adding your new favourite');
    }
  };

  removeFaveJob = async (faveId) => {
    try {
      await removeFave(faveId);
      this.getAllFaveJobs();
    } catch (e) {
      throw new Error('There was an error removing your favourite');
    }
  };

  componentDidMount = () => {
    this.getAllFaveJobs();
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveJob: this.addFaveJob,
          removeFaveJob: this.removeFaveJob,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

FavesProvider.propTypes = {
  children: PropTypes.object,
};

export default FavesProvider;
