import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Transaction } from "../../interface/interface";
import { getTransactions } from "../api/kamiApi";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy} ${hh}:${mi}`;
};

export default function TransactionListScreen() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    loadTransactions();
  }, []);

  const renderItem = ({ item }: { item: Transaction }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        router.push({
          pathname: "/TransactionDetail",
          params: { id: item._id },
        });
      }}
    >
      <Text style={{ fontWeight: "bold" }}>
        {item._id} - {formatDate(item.createdAt)}
      </Text>
      <Text>- {item.services.map((s) => s.name).join("\n- ")}</Text>{" "}
      <Text>Customer: {item.customer.name}</Text>
      <Text style={{ color: "red", fontWeight: "bold" }}>
        {item.price.toLocaleString()} đ
      </Text>
      {item.status === "Cancelled" && (
        <Text style={{ color: "tomato", fontStyle: "italic" }}>Cancelled</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transaction</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e84c64",
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
});
