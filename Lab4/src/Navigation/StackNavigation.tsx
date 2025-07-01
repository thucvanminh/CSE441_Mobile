import React from 'react';
import {StackParamList} from '../interface/interface';
import BottomNavigation from './BottomNavigation';
import DetailScreen from '../screens/DetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen name="Contacts" component={BottomNavigation} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}
