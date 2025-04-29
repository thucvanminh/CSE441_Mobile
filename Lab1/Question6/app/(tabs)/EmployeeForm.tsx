import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, SafeAreaView } from 'react-native';

const EmployeeForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        occupation: '',
    });

    const onUpdate = () => {
        setIsVisible(true);

        // Ẩn sau 2 giây
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Employee Information</Text>

            <TextInput
                style={styles.input}
                placeholder="Full Name"
                keyboardType="ascii-capable"
                value={formData.fullName}
                onChangeText={(text) => setFormData({ ...formData, fullName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                keyboardType="numeric"
                value={formData.age}
                onChangeText={(text) => setFormData({ ...formData, age: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Occupation"
                keyboardType="ascii-capable"
                value={formData.occupation}
                onChangeText={(text) => setFormData({ ...formData, occupation: text })}
            />

            <Button title="Update" onPress={onUpdate} color="#28A745" />

            {isVisible && (
                <Text style={styles.successText}>Update Information Successfully</Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        width: '80%',
        backgroundColor: '#fff',
    },
    successText: {
        marginTop: 20,
        fontSize: 16,
        color: '#28A745',
        fontWeight: 'bold',
    },
});

export default EmployeeForm;
