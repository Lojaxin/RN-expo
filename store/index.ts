/**
 * 客户端全局状态管理工具
 */
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './features/user/userSlice';

/**
 * 合并所有的reducer
 */
const store = configureStore({
    reducer: {
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             // 如果需要存储非序列化数据，在这里配置
    //             ignoredActions: [],
    //             ignoredPaths: [],
    //         },
    //     }),
    //devTools: process.env.NODE_ENV !== 'production',
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
/**
 * 用于 TS 类型检查
 * @returns 
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;