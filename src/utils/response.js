import axios from 'axios'

const instance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://www.ncrna.lbci.net',
  timeout: 5 * 60 * 1000 // 设置超时5分钟
})
// 全局请求拦截
// 所有的网络请求都会先走这个方法
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)
// 全局响应拦截
// 所有的网络请求返回参数后都会先执行这个方法
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (err) {
    return Promise.reject(err)
  }
)

// get方法
export function get (url, params) {
  return instance.get(url, {
    params
  })
}

// post方法
export function post (url, data) {
  return instance.post(url, data)
}
