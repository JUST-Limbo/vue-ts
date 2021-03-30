import request from './request'


export const LoginApi = (data: { password: string, userName: string }): Promise<Ajax.AjaxRsp> => request.post('/admin/auth/login', data)
