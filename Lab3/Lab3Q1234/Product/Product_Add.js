import React from "react";
import { Alert, TextInput, View, SafeAreaView, Text, Button } from "react-native";
import styles from "./StyleProduct";

function Add() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [discountPercentage, setDiscountPercentage] = useState('');
	const [rating, setRating] = useState('');
	const [stock, setStock] = useState('');
	const [brand, setBrand] = useState('');
	const [category, setCategory] = useState('');
	const [images, setImages] = useState('');



	handleSubmit = () => {
		fetch('https://dummyjson.com/products/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: title,
				description: description,
				price: price,
				discountPercentage: discountPercentage,
				rating: rating,
				stock: stock,
				brand: brand,
				category: category,
				images: images,
			}),
		})
			.then((res) => res.json)
			.then(console.log);
		Alert.alert("Add sucessfull");
		clearForm();
	};

	const clearForm = () => {
		setTitle('');
		setDescription('');
		setPrice('');
		setDiscountPercentage('');
		setRating('');
		setStock('');
		setCategory('');
		setImages('');
	};

	return (
		<SafeAreaView>
			<Text>Add Product</Text>
			<Text>Title</Text>
			<TextInput
				placeholder="Enter title"
				placeholderTextColor='grey'
				value={title}
				onChangeText={(text) => setDescription(text)}
			></TextInput>
		</SafeAreaView>
	);
}

export default Add;

