import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Square from './Square';
import styles from './style';
import data from './Data';

function App(): React.JSX.Element {
    return (
        <ScrollView style={styles.container}>
            {data.map((item, index) => (
                <Square key={item} text={`Square ${index + 1}`}></Square>
            ))}
        </ScrollView>
    );
}

export default App;
