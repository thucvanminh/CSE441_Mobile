import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

const Login = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.loginHeader}>Login</Text>
			
			<TextInput 
				style={styles.input} 
				placeholder="Phone" 
				keyboardType="phone-pad" 
			/>
			<TextInput 
				style={styles.input} 
				placeholder="Password" 
				secureTextEntry={true} 
			/>
			
			<TouchableOpacity 
				style={styles.loginButton} 
				onPress={() => {
					// Thêm hành động khi nhấn vào nút Login tại đây
					console.log("Login button pressed");
				}}
			>
				<Text style={styles.loginButtonText}>Login</Text>
			</TouchableOpacity>
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

export default Login;
