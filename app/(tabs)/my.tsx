import { Text, View, StyleSheet,Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppDispatch } from "@/store";
import { setUser,clearUser } from '@/store/features/user/userSlice';

export default function MyScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text style={styles.text}>My screen</Text>
      <Button title='add' onPress={() => dispatch(setUser({name:'test'}))} />
      <Button title='clear' onPress={() => dispatch(clearUser())} />
      <Button title='go to notTabPage' onPress={() => {
        router.push({
          pathname: '/notTabPage',
          params: { params: 'some' }
        });
      }} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});