import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();

const PublicStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default PublicStacks;