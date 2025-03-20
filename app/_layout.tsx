import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from '@/store';

const queryClient = new QueryClient();
export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                    <Stack.Screen name="notTabPage" />
                </Stack>
            </Provider>
        </QueryClientProvider>
    );
}
