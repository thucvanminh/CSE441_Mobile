import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

const MinOfThreeNumbers = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [min, setMin] = useState(0);

    const findMinimum = () => {
        const a = (num1);
        const b = (num2);
        const c = (num3);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            return;
        } else {
            const minValue = Math.min(a, b, c);
            setMin(minValue);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Find Minimum of Three Numbers</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter first number"
                keyboardType="numeric"
                value={num1.toString()}
                onChangeText={text => setNum1(Number(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter second number"
                keyboardType="numeric"
                value={num2.toString()}
                onChangeText={text => setNum2(Number(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter third number"
                keyboardType="numeric"
                value={num3.toString()}
                onChangeText={text => setNum3(Number(text))}
            />

            <Button title="Find Minimum" onPress={findMinimum} color="#28A745" />

            {min !== null && (
                <Text style={styles.result}>Minimum: {min}</Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
    },
});

export default MinOfThreeNumbers;
