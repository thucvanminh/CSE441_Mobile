// App.tsx
import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import ProductsScreen from './screens/ProductsScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from './src/MainNavigation.js';

export default function App() {
  return (
    <SafeAreaView  style={{ flex: 1 }}>
      <PaperProvider>
        <MainNavigation/>
      </PaperProvider>
    </SafeAreaView>
  );
}
