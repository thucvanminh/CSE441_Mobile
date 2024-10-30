import React, { useState } from 'react';

import Product from './Product/Product';
import Add from './Product/Product_Add';
import searchProduct from './Product/Product_Search';
import Detail from './Product/Product_Detail';

import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Product', title: 'Products', focusedIcon: 'album' },
    { key: 'Add', title: 'Add', focusedIcon: 'heart' },
    { key: 'Search', title: 'Search', focusedIcon: 'folder' },
    { key: 'Detail', title: 'Detail', focusedIcon: 'home' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Product: Product,
    Add: Add,
    Search: searchProduct,
    Detail: Detail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}


export default App;
