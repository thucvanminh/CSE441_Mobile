import React, { useState } from "react";
import { useEffect } from "react";


const [data, setData] = useState([]);
const filePath = 'https://dummyjson.com/products/2';

useEffect(() => {
	fetch(filePath)
		.then((data) => {
			if (!response.ok) {
				throw new Error('Network response is not ok');
			}
			return response.json();
		})
		.then((d) => {
			setData(d);
		})
		.catch((error) => {
			console.error('Error fetching data: ', error);
		});
});
