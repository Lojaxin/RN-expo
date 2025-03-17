import axios,{ AxiosInstance } from 'axios';
import { Alert } from 'react-native';
import storage from '@/utils/storage';

type Method = 'get' | 'post';

const baseURL = "http://localhost:4000";
const httpsCreate = () => {
    //请求公共配置
    const instance:AxiosInstance = axios.create({
        baseURL,
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
    });

    const request = (method: Method) => (url: string, params: any, config?: Record<string, any>) => {
        // const controller = new AbortController();
        // config.signal = controller.signal;
        return instance[method]?.(url, params,config);
    }

    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        const token = storage.get('LOGIN_TOKEN');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        } else {
            // 未登录
        }
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        switch (response?.data?.code) {
            case 200:
                return response.data;
            case 401:
            case 410:
                //登录过期
                response?.data?.msg && Alert.alert("请重新登录");
                storage.clear();
                return;
            default:
                response?.data?.msg && Alert.alert("请求失败",response?.data?.msg);
                return; //返回undefined,res无值就是业务失败
        }
    }, function (error) {
        if ([401, 410].includes(error.response?.data?.code)) {
            Alert.alert("请重新登录");
            storage.clear();
            return;
        }
        const msg = error?.response?.data?.message || error?.message || '请求错误,请在网络畅通的情况下刷新页面重试';
        // Alert.alert(msg.toString());
        console.log(error)
        //Promise.reject(error)//不需要reject,无值就是业务失败
        return;
    });

    return {
        get: request('get'),
        post: request('post')
    }
}

export default httpsCreate;