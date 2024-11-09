import { useEffect } from "react";
import { fetchContactsSuccess, mapContact } from "./Store";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";


const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
	const data = await fetch("https://randomuser.me/api/?result=50");
	const ContactData = await data.json();
	return ContactData.results.map(mapContact);
};

const Contacts = ({ navigation }) => {
	const { contacts } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchContacts()
			.then(
				contacts => {
					dispatch(fetchContactsSuccess(contacts));
				}
			)
			.catch(
				e => {

				}
			)
	}, [])

	const renderContacts = ({ item }) => {
		const { name, avatar, phone } = item;
		return <ContactListItem
			name={name}
			avatar={avatar}
			phone={phone}
			onPress={() => navigation.navigate("ProfileContact", { contact: item })}
		/>;
	};

	return (
		<View style={StyleSheet.container}>
			<FlatList
				data={contacts}
				keyExtractor={keyExtractor}
				renderItem={renderContacts}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flex: 1,
		paddingLeft: 10,
		paddingRight: 10,
	}
});