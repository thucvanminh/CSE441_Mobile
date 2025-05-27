import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import ProductsScreen from './screens/ProductsScreen';
import AddProduct from './screens/AddProduct';
import SearchScreen from './screens/SearchScreen';
import  ProductDetail from './screens/ProductDetail';


const MainNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'products', title: 'All Products', focusedIcon: 'folder' },
    { key: 'add', title: 'Add', focusedIcon: 'folder' },
    { key: 'search', title: 'Search', focusedIcon: 'find' },
    { key: 'detail', title: 'Detail', focusedIcon: 'calendar' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    products: ProductsScreen,
    add: AddProduct,
    search: SearchScreen,
    detail: ProductDetail,
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

