import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text, Card, Button, Title } from 'react-native-paper';
import useProducts from '../useProduct';



const ProductsScreen = () => {
  const { originProducts, error } = useProducts();

  const renderItem = ({ item }) => (
    <Card style={{ marginBottom: 15 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Card.Cover
          source={{ uri: item.thumbnail }}
          style={{ width: 100, height: 100, borderRadius: 8, margin: 10 }}
        />
        <View style={{ flex: 1, padding: 10 }}>
          <Title>{item.title}</Title>
          <Text>Description: {item.description}</Text>
          <Text>Price: ${item.price}</Text>
          <Text>Discount: {item.discountPercentage}%</Text>
          <Text>Rating: {item.rating}</Text>
          <Text>Stock: {item.stock}</Text>
          <Text>Brand: {item.brand}</Text>
          <Text>Category: {item.category}</Text>
          <Card.Actions>
            <Button>Detail</Button>
            <Button>Add</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </View>
      </View>
    </Card>
  );


  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Title style={{ textAlign: 'center', marginVertical: 10, fontSize: 24 }}>Product List</Title>
      <FlatList
        data={originProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsScreen;
