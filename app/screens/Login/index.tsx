import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { string } from '../../constants/appConstants';
import { Button } from 'native-base';
import { toastHandler } from '../../actions/deviceInternet';

export default function Login() {
    return (
        <View style={styles.container}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <Text>{string.loginMessage}</Text>
            <Button onPress={() => toastHandler('success', 'Error Occured')}>
                <Text>Toast</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 30
    }
});