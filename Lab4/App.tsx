import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
