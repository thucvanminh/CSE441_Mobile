import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
} from 'react-native';

export default function SumProgramme() {
    const [number, setNumber] = React.useState('');
    const [sum, setSum] = React.useState<number | null>(null);

    const calculateSum = () => {
        if (number.length === 0) {
            setSum(null);
            return;
        }

        const numStr = number.trim();

        // Bỏ dấu âm nếu có
        const pureNumStr = numStr.replace('-', '');

        const firstDigit = parseInt(pureNumStr[0]);
        const lastDigit = parseInt(pureNumStr[pureNumStr.length - 1]);

        const total = firstDigit + lastDigit;
        setSum(total);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sum Programme</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a number"
                    keyboardType="numeric"
                    value={number}
                    onChangeText={(text) => setNumber(text)}
                />

                <Button title="Calculate" onPress={calculateSum} color="#28A745" />
            </View>

            {sum !== null && (
                <Text style={styles.result}>Sum: {sum}</Text>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    result: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#007BFF',
    },
});
