import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import Contacts from './src/Contacts';
import Store from './src/Store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{

        headerShown: true,
      }
      }

    >

      <Stack.Screen name="Contacts" component={Contacts}
                    options={{title: 'Contacts'}} />

      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile contact'}} />

    </Stack.Navigator>

  );
};
function FavoritesScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Favorites" component={Favorites}
                    options={{title: 'Favorites'}} />
      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile contact'}} />
    </Stack.Navigator>
  );
};


const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreens"
      labeled={false}
      activeColor="greyLight"
      inactiveColor="greyDark"
      barStyle={{backgroundColor: 'bllue'}}
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsScreens}
        options={{
          tabBarIcon: 'format-list-bulleted',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreens}
        options={{
          tabBarIcon: 'star-check',
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};
