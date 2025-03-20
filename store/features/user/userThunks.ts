import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '@/api';

export const userGet = createAsyncThunk('user/get', async (_, thunkAPI) => {
    // const currentState = thunkAPI.getState() as any;
    try {
        const response = await userApi.get();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
});
