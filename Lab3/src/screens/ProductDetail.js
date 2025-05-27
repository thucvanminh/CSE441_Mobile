import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Text, Card, Button, Title} from 'react-native-paper';
import useProducts from '../useProduct';

const SearchScreen = () => {
  const {originProducts ,errors} = useProducts();

  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  let filePath = 'https://dummyjson.com/products/';


  const renderItem = ({item}) => (
    <Card style={{marginBottom: 15}}>
      <Card.Cover source={{uri: item.thumbnail}} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Text>Description: {item.description}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Discount: {item.discountPercentage}%</Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>
      </Card.Content>
      <Card.Actions>

        <Button>Delete</Button>

        <Button>Cancel</Button>
      </Card.Actions>
    </Card>
  );
  return (
    <View style={{flex: 1, padding: 10}}>
      <Title
        style={{
          alignItems: 'center',
          marginVertical: 10,
          fontWeight: 'bold',
          fontStyle: 24,
        }}>Search Product</Title>
      <FlatList
        data={originProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}></FlatList>
    </View>
  );
};

export default SearchScreen;
