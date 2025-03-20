import httpsCreate from '@/utils/axios';

const http = httpsCreate();

/**
 * 用户相关接口
 */
export const userApi = {
    create: (params: any) => http.post('/user/create', params),
    get: (params?: any) => http.get('/user/get', params),
    update: (params: any) => http.post('/user/update', params),
    delete: (params: any) => http.get('/user/delete', params),
};

/**
 * 列表相关接口
 */
export const someListApi = {
    create: (params: any) => http.post('/someList/create', params),
    get: (params?: any) => http.get('/someList/get', params),
    list: (params?: any) => http.get('/someList/list', params),
    update: (params: any) => http.post('/someList/update', params),
    delete: (params: any) => http.get('/someList/delete', params),
};
