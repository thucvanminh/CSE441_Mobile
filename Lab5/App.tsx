import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddServiceScreen from './src/screens/AddServiceScreen';
import ServiceDetailScreen from './src/screens/ServiceScreenDetail';
import EditServiceScreen from './src/screens/EditServiceScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff6b6b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'KAMI Services' }}
        />
        <Stack.Screen
          name="AddService"
          component={AddServiceScreen}
          options={{ title: 'Add Service' }}
        />
        <Stack.Screen
          name="ServiceDetail"
          component={ServiceDetailScreen}
          options={{ title: 'Service Detail' }}
        />
        <Stack.Screen
          name="EditService"
          component={EditServiceScreen}
          options={{ title: 'Edit Service' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
