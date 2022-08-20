import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MovieDetails from '../screens/MovieDetails';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const PrivateStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default PrivateStacks;