import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext({user: null, setUser: null});

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState('user');
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
UserContextProvider.propTypes = {
  children: PropTypes.object,
};
export {UserContext, UserContextProvider};
