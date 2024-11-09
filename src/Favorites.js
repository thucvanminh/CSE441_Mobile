import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import React from "react-native";
import { StyleSheet, View, FlatList } from 'react-native';
import ContactThum from './ContactThum';

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
	const { contacts } = useSelector((state) => state);
	const renderFavoriteThumbnail = ({ item }) => {
		const { avatar } = item;
		return (
			<ContactThumbNail
				avatar={avatar}
				onPress={() => { navigation.navigate('ProfileContact', { contact: item }) }}>

			</ContactThumbNail>
		);
	};
	const favorites = contacts.filter((contact) => contact.favorite);
	return (
		<View style={styles.container}>
			<FlatList
				data={favorites}
				keyExtractor={keyExtractor}
				numColumns={3}
				contentContainerStyle={styles.list}
				renderItem={renderFavoriteThumbnail}
			></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		justifyContent: 'center',
		flex: 1
	},
	list: {
		alignContent: 'center'
	}
});

export default Favorites;