import { View, StyleSheet } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { useList } from '@/hooks'

export default function NotFoundScreen() {
  const params = useLocalSearchParams();
  console.log('%c [ params ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', params)
  const { data, isLoading , error } = useList();
  console.log('%c [ { data, isLoading , error } ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', { data, isLoading , error })
  return (
    <>
      <Stack.Screen options={{ title: '不是tab页' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          返回首页
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
