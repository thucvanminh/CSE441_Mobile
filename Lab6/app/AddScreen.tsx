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
import { addService } from "./api/kamiApi";

export default function AddProduct() {
  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState("0");
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
        <Text style={styles.headerTitle}>Service</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.labelText}>
          Service name <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Input a service name"
          placeholderTextColor="#bdbdbd"
          value={serviceName}
          onChangeText={(text) => setServiceName(text)}
        />
        <Text style={styles.labelText}>
          Price <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#bdbdbd"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (serviceName === "") {
              Alert.alert("Please input the name");
            } else {
              addService(serviceName, price).then((rp) => {
                console.log(rp);
                if (!rp) {
                  Alert.alert("Failed", "Adding service was unsuccessful!");
                } else {
                  Alert.alert("Success", "Service added!", [
                    {
                      text: "OK",
                      onPress: () => router.replace("/(tabs)/HomeScreen"),
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
    backgroundColor: "#ff758c",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#ff758c",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 18,
    letterSpacing: 1,
  },
  container: {
    margin: 24,
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 8,
  },
  labelText: {
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 18,
    fontSize: 17,
    color: "#ff758c",
  },
  input: {
    backgroundColor: "#f8f0fc",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  button: {
    backgroundColor: "#ff8fa3",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 32,
    shadowColor: "#ff8fa3",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
});
