import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function HomeScreen() {
    const [input, setInput] = useState('');

    const handlePress = (value: any) => {
        if (value === 'C') {
            setInput('');
        } else if (value === '=') {
            try {
                setInput(eval(input).toString()); // dùng eval để xử lý biểu thức
            } catch (error) {
                setInput('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    const renderButton = (label: any) => (
        <TouchableOpacity style={styles.button} onPress={() => handlePress(label)}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{input || '0'}</Text>
            </View>

            <View style={styles.row}>
                {renderButton('7')}
                {renderButton('8')}
                {renderButton('9')}
                {renderButton('/')}
            </View>
            <View style={styles.row}>
                {renderButton('4')}
                {renderButton('5')}
                {renderButton('6')}
                {renderButton('*')}
            </View>
            <View style={styles.row}>
                {renderButton('1')}
                {renderButton('2')}
                {renderButton('3')}
                {renderButton('-')}
            </View>
            <View style={styles.row}>
                {renderButton('C')}
                {renderButton('0')}
                {renderButton('=')}
                {renderButton('+')}
            </View>
        </View>
    );
}
