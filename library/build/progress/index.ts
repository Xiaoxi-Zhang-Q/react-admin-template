/**
 * @name: index
 * @author: zhangxiaoxi
 * @date: 2024-03-18 15:36
 * @description：index
 * @update: 2024-03-18 15:36
 */
import progress from 'vite-plugin-vitebar'

export const createProgress = (env: Record<string, string>) => {
  return progress({ env })
}