import React from "react";
import { useEffect, useState } from "react";
import { Text, View, FlatList, SafeAreaView, Image, Button } from "react-native";



function Product() {

	const [data, setData] = useState([]);
	const filePath = "https://dummyjson.com/products";
	useEffect(() => {
		fetch(filePath)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((d) => {
				setData(d.products);
			})
			.catch((error) => {
				console.log(error);
			});
	})
	return (


		<View>
			<SafeAreaView>
				<View>
					<Text style={StyleSheet.title}>Product List</Text>

				</View>
				<FlatList>
					data = {data};
					renderItem = {({ item }) => {
						return (
							<View style={styles.card}>
								<View style={styles.left}>
									<Image source={{ uri: item.thumbnail }} style={styles.image} />
								</View>
								<View style={styles.right}>
									<Text style={styles.titlePr}>Title: {item.title}</Text>
									<Text>{item.description}</Text>
									<Text>Price: {item.price}</Text>
									<Text style={styles.dis}>Discount: {item.discountPercentage} off</Text>
									<Text>Rating: {item.rating}</Text>
									<Text>Stock: {item.stock}</Text>
									<Text>Brand: {item.brand}</Text>
									<Text>Category: {item.category}</Text>
									<View style={styles.groupButton}>
										<View style={styles.button}>
											<Button title="Detail" />
										</View>
										<View>
											<Button title="Add" style={styles.button} />
										</View>
										<View>
											<Button title="Delete" style={styles.button} />
										</View>
									</View>
								</View>
							</View>
						);
					}}
				</FlatList>
			</SafeAreaView>
		</View>
	);

}

export default Product;
