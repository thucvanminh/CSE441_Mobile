import { View,SafeAreaView,TouchableOpacity } from 'react-native';
import { StyleSheet, Image, Platform, Text,TextInput } from 'react-native';
import React from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
			<Text style={styles.loginHeader}>Login</Text>

			<TextInput
				style={styles.input}
				placeholder="Phone"
				keyboardType="phone-pad"
				// value={phone} // Hiển thị giá trị hiện tại của phone
				// onChangeText={setPhone} // Cập nhật giá trị của phone
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry={true}
				// value={password} // Hiển thị giá trị hiện tại của phone
				// onChangeText={setPassword} // Cập nhật giá trị của phone
			/>

			<TouchableOpacity
				style={styles.loginButton}
				onPress={() => {
					// Thêm hành động khi nhấn vào nút Login tại đây
					// loginMethod(phone, password);
					console.log("Login button pressed");

				}}
			>
				<Text style={styles.loginButtonText}>Login</Text>
			</TouchableOpacity>


			{/* <View><Text>{Textresponse}</Text></View> */}
		</View>
    </SafeAreaView>
    // <Text>Hello World</Text>
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
