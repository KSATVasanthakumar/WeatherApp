import { View, Text } from 'react-native';
import React from 'react';
import BottomStack from './BottomStack';
import { DetailS, SearchScreen } from '../screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomStack} />
      <Stack.Screen name="Detail" component={DetailS} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
