/**
 * @name: svg插件
 * @author: zhangxiaoxi
 * @date: 2024-03-18 16:07
 * @description：安装svg插件
 * @update: 2024-03-18 16:07
 */
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export const createSvgIcons = () => {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/icon')],
    symbolId: 'vab-icon-[name]',
  })
}