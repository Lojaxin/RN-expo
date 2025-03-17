import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { someListApi } from '@/api';

/**
* @tanstack/react-query 是一个用于管理异步数据的 React 库，它提供了以下几个核心概念：
* redux可以理解为客户端的全局状态管理，而react-query可以理解为服务端(交互)的全局状态管理
1. useQuery 用于获取数据：
- queryKey : 查询的唯一标识，可以是数组
- queryFn : 获取数据的函数
- staleTime : 数据保持新鲜的时间
- cacheTime : 数据缓存时间
- enabled : 控制是否执行查询
- retry : 失败重试次数
2. useMutation 用于修改数据：
- mutationFn : 执行修改的函数
- onSuccess : 成功回调
- onError : 错误回调
- onSettled : 完成回调（无论成功失败）
3. useQueryClient 用于管理查询：
- invalidateQueries : 使查询缓存失效
- setQueryData : 直接修改缓存数据
- prefetchQuery : 预加载数据
 */

export interface ListItem {
    id: string;
    title: string;
    description: string;
    createdAt: string;
}
  
 export interface CreateListItem {
    title: string;
    description: string;
}
// 获取列表
export function useList() {
  return useQuery({
    queryKey: ['list'],
    queryFn: someListApi.list,
  });
}

// 获取单个项目
export function useListItem(id: string) {
  return useQuery({
    queryKey: ['list', id],
    queryFn: () => someListApi.get(id),
    enabled: !!id,
  });
}

// 创建项目
export function useCreateListItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: someListApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list'] });
    },
  });
}

// 更新项目
export function useUpdateListItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (params: { id: string; data: Partial<ListItem> }) => 
        someListApi.update(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['list'] });
      queryClient.invalidateQueries({ queryKey: ['list', variables.id] });
    },
  });
}
//用法:
// const { mutate: createItem, isPending } = useCreateListItem();
//   const handleSubmit = () => {
//     createItem({
//       title,
//       description,
//     }, {
//       onSuccess: () => {
//         // createItem成功后的回调
//       },
//     });
//   };
// <Button 
// mode="contained" 
// onPress={handleSubmit}
// loading={isPending}
// disabled={!title || !description}
// >
// 创建
// </Button>

// 删除项目
export function useDeleteListItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: someListApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list'] });
    },
  });
}