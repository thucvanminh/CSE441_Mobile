import React from "react";
import { View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native';

const ContactListItem = ({ name, avatar, phone, onPress }) => {

	return (
		<TouchableHighlight

			underlayColor='grey'
			style={StyleSheet.container}
			onPress={onPress}>
			<View style={StyleSheet.contactInfo}>
				<Image source={{ uri: avatar }} style={styles.avatar}></Image>
				<View style={styles.details}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subtitle}>
						{phone}
					</Text>
				</View>
			</View>

		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 50,
		marginTop: 0,
	},
	contactInfo: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 24,
		paddingBottom: 24,
		borderBlockColor: 'grey',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	avatar: {
		borderRadius: 50,
		width: 50,
		height: 50,
	},
	details:{
		justifyContent: 'center',
		
	}
})