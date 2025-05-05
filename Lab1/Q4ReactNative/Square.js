import React from 'react';
import {View,Text,Alert,Button} from 'react-native';
import styles from './style';

function ClickOnTheSquare(value) {
    Alert.alert(value);
}

const Square = ({text})=>{
    return (
    <View>
        <Text>{text}</Text>
        <Button title='Click' onPress={() => ClickOnTheSquare(text)} />
    </View>
    );
}

export default Square;