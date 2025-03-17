import AsyncStorage from '@react-native-async-storage/async-storage';

// 创建一个存储工具对象
const storage = {
    async get(key: string) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Error reading data:', error);
            return null;
        }
    },

    async set(key: string, value: any) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    },

    async remove(key: string) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data:', error);
        }
    },

    async clear() {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error('Error clearing data:', error);
        }
    }
};

export default storage;