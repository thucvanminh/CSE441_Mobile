import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#d8d8d8',
        padding: 10,
    },
    display: {
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    displayText: {
        fontSize: 48,
        color: '#000000',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    button: {
        flex: 1,
        backgroundColor: '#ffffff',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 28,
        color: '#000000',
    },
});
