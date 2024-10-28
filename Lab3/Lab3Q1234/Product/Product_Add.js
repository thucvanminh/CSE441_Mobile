import React from "react";


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
[discountPercentage, setDiscountPercentage] = useState('');
const [rating, setRating] = useState('');
[stock, setStock] = useState('');
[brand, setBrand] = useState('');
const [category, setCategory] = useState('');
const [images, setImages] = useState('');



handleSubmit = () => {
	fetch('https://dummyjson. com/products/add', {
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
		.then((res) => res.json())
		.then(console.log);
	Alert.alert("Add sucessfull")
};