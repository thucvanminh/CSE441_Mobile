import React, { useState } from "react";


const [data, setData] = useState([]);
const [value, setValue] = useState('');
let filePath = 'https://dummyjson.com/products';

const searchProduct = () => {
	if (value != '')
		filePath = 'https://dummyjson.com/products/search?q=' + value;
	fetch(filePath)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network is not ok');
			}
			return response.json();
		})
		.then((datas) => {
			setData(datas.products);
		})
		.catch((error) => {
			console.error('Error fetching data: ', error);
		});

};
export default searchProduct;
