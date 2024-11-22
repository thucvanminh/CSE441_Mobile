import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function Index() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [Textresponse, setTextresponse] = useState('');

	const dispatch = useDispatch();

	function loginMethod(loginPhone: string, loginPassword: string) {
		let data = JSON.stringify({
			"phone": loginPhone,
			"password": loginPassword
		});

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://kami-backend-5rs0.onrender.com/auth',
			headers: {
				'Content-Type': 'application/json'
			},
			reponsedata: data
		}

		axios.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
				if (response.data.token !== null) {
					dispatch(setToken(response.data.token));

				} else {
					setTextresponse("Login Failed")
				}

			})
			.catch((error) => {
				console.log(error);
			});
	}



	return (
		<View style={styles.container}>
			<Text style={styles.loginHeader}>Login</Text>

			<TextInput
				style={styles.input}
				placeholder="Phone"
				keyboardType="phone-pad"
				onChangeText={setPhone}
				value={phone}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={setPassword}
				value={password}
			/>

			<TouchableOpacity
				style={styles.loginButton}
				onPress={() => {
					// Thêm hành động khi nhấn vào nút Login tại đây
					loginMethod(phone, password);
					console.log("Login button pressed");

				}}
			>
				<Text style={styles.loginButtonText}>Login</Text>
			</TouchableOpacity>

			<View><Text>{Textresponse}</Text></View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginHeader: {
		fontSize: 50,
		color: 'red',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
	},
	input: {
		width: '80%',
		height: 50,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 15,
		fontSize: 18,
	},
	loginButton: {
		width: '80%',
		height: 50,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginTop: 20,
	},
	loginButtonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		borderRadius: 100
	},
});
