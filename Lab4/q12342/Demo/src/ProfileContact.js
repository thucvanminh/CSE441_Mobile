import { View } from "react-native";
import ContactThum from './ContactThum';
import DetailListIt from './DetailListItem';
import { Text, View, Alert, Button, StyleSheet } from "react-native";
import { IconButton } from 'react-native-paper';

const ProfileContact = ({ route }) => {
	const { contact } = route.params;
	const { id, avatar, email, phone, cell, favorite } = contact;

	return (
		<View style={styles.container}>
			<View style={styles.avatarSection}>
				<ContactThum avatar={avatar} name={name} phone={phone}></ContactThum>
			</View>
			<View style={styles.detailsSection}>
				<DetailListIT icon="mail" title="Email" subtitle={email}></DetailListIT>
				<DetailListIT icon="phone" title="Work" subtitle={phone}></DetailListIT>
				<DetailListIT icon="smartphone" title="Personal" subtitle={cell}></DetailListIT>
				<View style={{ alignItems: "center" }}>
					<IconButton icon={favorite == true ? "star-check" : "star-check-outline"}>
						iconColor= "#663399"
						size= {20}
						onPress = {() => {
							//updateFavorite();
						}}
					</IconButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.creat({
	container: {
		flex: 1
	},
	avatarSection: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'blue',
	},
	detailsSection: {
		flex: 1,
		backgroundColor: 'white'
	},
});

export default ProfileContact;