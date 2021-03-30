import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:80',
  timeout: 100000
})

instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  return config
}, err => {
  return Promise.resolve(err)
})

instance.interceptors.response.use((result: AxiosResponse): AxiosResponse => {
  return result.data
}, err => {
  return Promise.resolve(err)
})

export default instance
