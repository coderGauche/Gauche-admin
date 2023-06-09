/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 14:59:08
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:14:28
 * @FilePath: /vite-project/src/api/modules/user.ts
 */
import { ResPage, User } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";

import http from "@/api";

/**
 * @name 用户管理模块
 */

// * 获取用户列表
export const getUserList = (params: Partial<User.ReqGetUserParams>) => {
	return http.post<ResPage<User.ResUserList>>(PORT1 + `/user/list`, params);
};

// * 新增用户
export const addUser = (params: { id: string }) => {
	return http.post(PORT1 + `/user/add`, params);
};

// * 批量添加用户
export const BatchAddUser = (params: FormData) => {
	return http.post(PORT1 + `/user/import`, params, { headers: { "Content-Type": "multipart/form-data" } });
};

// * 编辑用户
export const editUser = (params: { id: string }) => {
	return http.put(PORT1 + `/user/edit`, params);
};

// * 删除用户
export const deleteUser = (params: { id: string[] }) => {
	return http.delete(PORT1 + `/user/delete`, params);
};

// * 切换用户状态
export const changeUserStatus = (params: { id: string; status: number }) => {
	return http.post(PORT1 + `/user/change`, params);
};

// * 重置用户密码
export const resetUserPassWord = (params: { id: string }) => {
	return http.post(PORT1 + `/user/rest_password`, params);
};

// * 导出用户数据
export const exportUserInfo = (params: User.ReqGetUserParams) => {
	return http.post<BlobPart>(PORT1 + `/user/export`, params, { responseType: "blob" });
};
