import {Image, StyleSheet, Platform, SafeAreaView, Text, View, Button} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useState} from "react";

export default function HomeScreen() {
    const [pressCount, setPressCount] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredView}>
                <Text>You've pressed the button {pressCount} time(s)</Text>
                <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}></Button>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        fontFamily: 'SpaceMono',
        fontSize: 16,
        color: 'white',
    },
    View: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});