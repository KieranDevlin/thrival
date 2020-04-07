import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../config/api';
import {UserContextProvider} from './context/UserContext';
import FavesProvider from './context/FavesContext';

export default class App extends Component {
  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <UserContextProvider>
            <FavesProvider>
              <NavigationContainer>
                <RootNav />
              </NavigationContainer>
            </FavesProvider>
          </UserContextProvider>
        </ApolloProvider>
      </>
    );
  }
}
