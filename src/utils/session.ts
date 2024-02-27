// 设置token
export const setToken = (key: string, data: string) => {
   return window.sessionStorage.setItem(key, data)
}
// 获取token
export const getToken = (key: string) => {
   return window.sessionStorage.getItem(key)
}