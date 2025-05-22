import React, {useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';
import title from 'react-native-paper/src/components/Typography/v2/Title';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discount: discount,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        imageUrl: imageUrl,
      }),
    })
      .then(response => response.json())
      .then(console.log);
    Alert.alert('Success', 'Product added successfully');
  };

  const handleAddProduct = () => {
    // Tạm thời in ra console
    console.log({
      description,
      price,
      discount,
      rating,
      stock,
      brand,
      category,
      imageUrl,
    });
  };

  return (
    <ScrollView contentContainerStyle={{padding: 20}}>
      <Title style={{textAlign: 'center', marginBottom: 20}}>
        Add New Product
      </Title>

      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        style={{marginBottom: 10}}
        mode="outlined"
      />
      <TextInput
        label="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{marginBottom: 10}}
        mode="outlined"
      />
      <TextInput
        label="Discount (%)"
        value={discount}
        onChangeText={setDiscount}
        keyboardType="numeric"
        style={{marginBottom: 10}}
        mode="outlined"
      />
      <TextInput
        label="Rating"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        style={{marginBottom: 10}}
        mode="outlined"
      />
      <TextInput
        label="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
        style={{marginBottom: 10}}
        mode="outlined"
      />
      <TextInput
        label="Brand"
        value={brand}
        onChangeText={setBrand}
        style={{marginBottom: 10}}
        mode="outlined"
      />
      <TextInput
        label="Category"
        value={category}
        onChangeText={setCategory}
        style={{marginBottom: 10}}
        mode="outlined"
      />
      <TextInput
        label="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={{marginBottom: 20}}
        mode="outlined"
      />

      <Button mode="contained" onPress={handleSubmit}>
        Add Product
      </Button>
    </ScrollView>
  );
};

export default AddProduct;
