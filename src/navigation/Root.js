import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/DestinationSearch';
import HomeScreen from '../screens/SearchResults';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'DestinationSearch'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearch}
        />
        <Stack.Screen name={'Search Results'} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
