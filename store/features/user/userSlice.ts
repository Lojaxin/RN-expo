import { createSlice } from "@reduxjs/toolkit";
import { userGet } from './userThunks';

export interface UserState {
    data: any | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserState = {
    data: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            // 使用 immer 的特性，直接修改 state
            state.data = payload;
        },
        clearUser: (state) => {
            // 直接修改 state
            state.data = null;
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userGet.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(userGet.fulfilled, (state, action) => {
                console.log('%c [ state, action ]-41', 'font-size:13px; background:pink; color:#bf2c9f;', state, action)
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null;
            })
            .addCase(userGet.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Unknown error';
            });
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;