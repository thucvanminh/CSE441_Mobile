import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Menu } from "react-native-paper";
import { getTransactionsById } from "./api/kamiApi";

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<any>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const detail = await getTransactionsById(id as string);
      setData(detail);
    };
    load();
  }, []);

  const handleEdit = () => {
    setMenuVisible(false);
    // Logic chỉnh sửa
  };

  const handleDelete = () => {
    setMenuVisible(false);
    // Logic xoá
  };

  if (!data) return <Text style={{ padding: 16 }}>Loading...</Text>;

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/TransactionScreen")}
        >
          <MaterialIcons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Detail</Text>

        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <MaterialIcons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={handleEdit} title="Edit" />
          <Menu.Item onPress={handleDelete} title="Delete" />
        </Menu>
      </View>

      {/* Body */}
      <ScrollView style={styles.container}>
        {/* General Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General information</Text>
          <View style={styles.infoRow}>
            <Text>Transaction code:</Text>
            <Text>{data._id}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Customer:</Text>
            <Text>
              {data.customer?.name} - {data.customer?._id}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Creation time:</Text>
            <Text>{formatDate(data.createdAt)}</Text>
          </View>
        </View>

        {/* Services List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services list</Text>
          {data.services.map((s: any, index: number) => (
            <View key={index} style={styles.serviceItem}>
              <Text>
                {s.name} x{s.quantity}
              </Text>
              <Text>{(s.price ?? 0).toLocaleString("vi-VN")} đ</Text>
            </View>
          ))}
          <View style={[styles.infoRow, { marginTop: 8 }]}>
            <Text style={{ fontWeight: "bold" }}>Total:</Text>
            <Text style={{ fontWeight: "bold" }}>
              {(data.price ?? 0).toLocaleString("vi-VN")} đ
            </Text>
          </View>
        </View>

        {/* Cost */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cost</Text>
          <View style={styles.infoRow}>
            <Text>Amount of money:</Text>
            <Text>{(data.price ?? 0).toLocaleString("vi-VN")} đ</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Discount:</Text>
            <Text>
              -
              {(
                (data.price ?? 0) - (data.priceBeforePromotion ?? 0)
              ).toLocaleString("vi-VN")}{" "}
              đ
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.totalLabel}>Total payment:</Text>
            <Text style={styles.totalValue}>
              {(data.priceBeforePromotion ?? 0).toLocaleString("vi-VN")} đ
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy} ${hh}:${mi}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#e84c64",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 12,
    color: "tomato",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  totalLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
  totalValue: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
});
