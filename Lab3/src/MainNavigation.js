import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import ProductsScreen from './screens/ProductsScreen';
import AddProduct from './screens/AddProduct';
import SearchScreen from './screens/SearchScreen';


const MainNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'products', title: 'UseProducts', icon: 'folder' },
    { key: 'add', title: 'Add', icon: 'folder' },
    { key: 'search', title: 'Search', icon: 'find' },
    { key: 'detail', title: 'Detail', icon: 'calendar' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    products: ProductsScreen,
    add: AddProduct,
    search: SearchScreen,
    // detail: DetailRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainNavigation;

