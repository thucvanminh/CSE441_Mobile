import React from "react";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";



export default function Product() {

	const [data, setData] = useState([]);
	const filePath = "https://dummyjson.com/products";
	useEffect(() => {
		fetch(filePath)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Networ......');
				}
				return response.json();
			})
			.then((d) => { setData(d.products); }
			)
			.catch((error) => { console.log(error); })
	});
	return (


		<View>
			<FlatList data={data}
				renderItem={({ item }) => { return (<View><Text>{item.title}</Text></View>); }} />
		</View>
	);

}
