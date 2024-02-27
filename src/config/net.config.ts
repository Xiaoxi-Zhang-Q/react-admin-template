/**
 * @name: 网络配置
 * @author: zhangxiaoxi
 * @date: 2024-02-27 10:11
 * @description：开发环境去.env.development改，生产环境去.env.production改，测试环境去.env.test改
 * @update: 2024-02-27 10:11
 */
export const netConfig: {
  [key: string]: string | number | Array<number | string>
} = {
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  // 最长请求时间
  timeout: 10000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0, '200', '0'],
  // 数据状态的字段名称
  statusName: 'code',
  // 状态信息的字段名称
  messageName: 'msg',
}