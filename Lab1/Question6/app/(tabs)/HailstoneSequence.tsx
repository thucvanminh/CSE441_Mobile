import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';

const HailstoneSequence = () => {
    const [inputNumber, setInputNumber] = useState('');
    const [sequence, setSequence] = useState<number[]>([]);

    const generateHailstone = () => {
        let n = parseInt(inputNumber);
        if (isNaN(n) || n <= 0) {
            setSequence([]);
            alert('Please enter a positive number!');
            return;
        }

        const result = [n];
        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
            result.push(n);
        }
        setSequence(result);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Hailstone Sequence Generator</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter a positive number"
                keyboardType="numeric"
                value={inputNumber}
                onChangeText={setInputNumber}
            />

            <Button title="Generate Sequence" onPress={generateHailstone} color="#007BFF" />

            <ScrollView style={styles.resultContainer}>
                {sequence.length > 0 && (
                    <Text style={styles.resultText}>
                        {sequence.join(' ➝ ')}
                    </Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    resultContainer: {
        marginTop: 20,
    },
    resultText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
});

export default HailstoneSequence;
