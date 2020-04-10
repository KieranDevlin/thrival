import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../config/api';
import {UserContextProvider} from './context/UserContext';
import FavesProvider from './context/FavesContext';
import AuthProvider from './context/AuthProvider';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserContextProvider>
          <FavesProvider>
            <NavigationContainer>
              <AuthProvider>
                <RootNav />
              </AuthProvider>
            </NavigationContainer>
          </FavesProvider>
        </UserContextProvider>
      </ApolloProvider>
    );
  }
}
