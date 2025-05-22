import React, {useState,useEffect } from 'react';
import {FlatList, View, TextInput, StyleSheet} from 'react-native';
import {Text, Card, Button, Title} from 'react-native-paper';
import useProduct from '../useProduct';

const SearchScreen = () => {
  const {originProducts} = useProduct();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setProducts(originProducts);
  }, [originProducts]);


  const searchProduct = () => {
    let filePath = 'https://dummyjson.com/products';
    if (searchQuery.trim() !== '') {
      filePath = `https://dummyjson.com/products/search?q=${searchQuery.trim()}`;
    }

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Lỗi khi fetch dữ liệu');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products || []);
      })
      .catch(err => {
        setError(err.message);
        setProducts([]);
      });

  };

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
        <Button>Detail</Button>
        <Button>Add</Button>
        <Button>Delete</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      <Title style={styles.title}>Search Product</Title>

      <TextInput
        placeholder="Enter product name"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={styles.input}
      />

      <Button mode="contained" onPress={searchProduct} style={styles.button}>
        Search
      </Button>

      {error !== '' && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={products} // ✅ fix để hiển thị kết quả search
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SearchScreen;
