/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import SearchResults from './src/screens/SearchResults/index.js';
import HomeScreen from './src/screens/HomeScreen/index.js';
import DestinationSearch from './src/screens/DestinationSearch/index.js';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
