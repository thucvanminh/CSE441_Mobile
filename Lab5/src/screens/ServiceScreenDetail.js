import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  ScrollView
} from 'react-native';
import ApiService from '../services/api';
import StorageService from '../utils/storage';

const ServiceDetailScreen = ({ navigation, route }) => {
  const { service } = route.params;
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    navigation.navigate('EditService', { service });
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Service',
      `Are you sure you want to delete "${service.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: confirmDelete,
        },
      ]
    );
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      const token = await StorageService.getToken();
      if (!token) {
        Alert.alert('Error', 'Authentication token not found. Please login again.');
        navigation.replace('Login');
        return;
      }

      const result = await ApiService.deleteService(service.id, token);

      if (result.success) {
        Alert.alert(
          'Success',
          'Service deleted successfully!',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack()
            }
          ]
        );
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          {/* Service Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Text style={styles.iconText}>⚙️</Text>
            </View>
          </View>

          {/* Service Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.servicePrice}>${service.price}</Text>

            {service.id && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Service ID:</Text>
                <Text style={styles.detailValue}>{service.id}</Text>
              </View>
            )}

            {service.createdAt && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Created:</Text>
                <Text style={styles.detailValue}>
                  {new Date(service.createdAt).toLocaleDateString()}
                </Text>
              </View>
            )}

            {service.updatedAt && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Last Updated:</Text>
                <Text style={styles.detailValue}>
                  {new Date(service.updatedAt).toLocaleDateString()}
                </Text>
              </View>
            )}
          </View>

          {/* Action Buttons */}
          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={[styles.actionButton, styles.editButton]}
              onPress={handleEdit}
              disabled={loading}
            >
              <Text style={styles.editButtonText}>✏️ Edit Service</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.deleteButton, loading && styles.deleteButtonDisabled]}
              onPress={handleDelete}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.deleteButtonText}>🗑️ Delete Service</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Additional Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Service Information</Text>
          <Text style={styles.infoCardText}>
            This service can be edited or deleted using the buttons above.
            Any changes will be synchronized with the server immediately.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 30,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  serviceName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  servicePrice: {
    fontSize: 20,
    color: '#ff6b6b',
    fontWeight: '600',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  actionContainer: {
    gap: 15,
  },
  actionButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  deleteButtonDisabled: {
    backgroundColor: '#ccc',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#e3f2fd',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196f3',
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 10,
  },
  infoCardText: {
    fontSize: 14,
    color: '#1976d2',
    lineHeight: 20,
  },
});

export default ServiceDetailScreen;
