import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addCustomer } from "./api/kamiApi";

export default function AddCustomer() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("0");
  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 50,
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/(tabs)/HomeScreen")}>
          <MaterialIcons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Customer</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.labelText}>
          Customer name <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Input a service name"
          placeholderTextColor="#bdbdbd"
          value={customerName}
          onChangeText={(text) => setCustomerName(text)}
        />
        <Text style={styles.labelText}>
          Phone <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#bdbdbd"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (customerName === "") {
              Alert.alert("Please input the name");
            } else {
              addCustomer(customerName, phone).then((rp) => {
                console.log(rp);
                if (!rp) {
                  Alert.alert("Failed", "Adding custome was unsuccessful!");
                } else {
                  Alert.alert("Success", "Customer added!", [
                    {
                      text: "OK",
                      onPress: () => router.replace("/(tabs)/CustomerScreen"),
                    },
                  ]);
                }
              });
            }
          }}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6C63FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    letterSpacing: 1,
  },
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 6,
  },
  labelText: {
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 16,
    fontSize: 16,
    color: "#6C63FF",
  },
  input: {
    backgroundColor: "#f0f1fa",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 16,
    fontSize: 17,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  button: {
    backgroundColor: "#FF6584",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 28,
    shadowColor: "#FF6584",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
    letterSpacing: 1,
  },
});
