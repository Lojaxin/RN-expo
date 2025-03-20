import { View, StyleSheet } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { useList } from '@/hooks';

export default function NotFoundScreen() {
    const params = useLocalSearchParams();
    const text = 'anniu';
    console.log('%c [ params ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', params);
    const { data, isLoading, error } = useList();
    console.log(
        '%c [ { data, isLoading , error } ]-8',
        'font-size:13px; background:pink; color:#bf2c9f;',
        { data, isLoading, error },
    );
    return (
        <View>
            <Stack.Screen options={{ title: '不是tab页' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    {text}
                </Link>
            </View>
        </View>
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
