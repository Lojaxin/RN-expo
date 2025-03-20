import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Page not found' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    <Text>返回首页</Text>
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        color: '#fff',
        fontSize: 20,
        textDecorationLine: 'underline',
    },

    container: {
        alignItems: 'center',
        backgroundColor: '#25292e',
        flex: 1,
        justifyContent: 'center',
    },
});
