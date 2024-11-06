

import React from 'react';
import 'react-native-gesture-handler';

import Contacts from './src/Contact';
import store from './src/Store';
import Favorites from './src/Favorites';
import ProfileContact from './src/ProfileContact';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName='Contacts'
      screenOptions={{
        headerShown: true
      }
      }
    >

      <Stack.Screen
        name='Contacts'
        component={Contacts}
        options={{ title: "Contacts" }}
      />

      <Stack.Screen
        name='ProfileContact'
        component={ProfileContact}
        options={{ title: "Profile Contact" }}
      />


    </Stack.Navigator >
  );
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName='Favorites'
      screenOptions={{
        headerShown: true
      }}>
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{ title: "Favorites" }}
      ></Stack.Screen>

      <Stack.Screen
        name='ProfileContact'
        component={ProfileContact}
        options={{ title: "Profile Contact" }}
      />

    </Stack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='ContactsScreen'
      barStyle={{ backgroundColor: "blue" }}
      labeled={false}
      activeColor={'greyLight'}
      inactiveColor={'greyDark'}
    >
      <Tab.Screen
        name='Contacts'
        component={ContactsScreens}
        options={{
          tabBarIcon: 'format-list-bulletd'
        }}
      ></Tab.Screen>

      <Tab.Screen
        name='Favorites'
        component={FavoriteScreens}
        options={{
          tabBarIcon: 'star-check'
        }}
      ></Tab.Screen>

    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator></TabNavigator>
      </NavigationContainer>

    </Provider>
  );
}

export default App;

