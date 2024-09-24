/**
 * @name: VitePlugin
 * @author: zhangxiaoxi
 * @date: 2024-03-18 14:02
 * @description：VitePlugin插件
 * @update: 2024-03-18 14:02
 */
import react from "@vitejs/plugin-react";
import type { PluginOption } from "vite";
import dayjs from 'dayjs'
import pc from 'picocolors'
import { port } from '/@/config/'
import chokidar from 'chokidar'
import { createProgress } from './progress/'
import { createSvgIcons } from './svgSprite/'
const viteUser = "VITE_" + "USER_";
export const createVitePlugin = (env: Record<string, string>) => {
  const nodeEnv = env[`${viteUser}NODE_ENV`];
  console.log(nodeEnv);
  const vitePlugins:PluginOption[] = [react()];
  // vitePlugins.push(createProgress(env))
  vitePlugins.push(createSvgIcons())
  return vitePlugins;
};
export const createWatch = (env: Record<string, string>) => {
console.log(env)
  const nodeEnv = env[`${viteUser}NODE_ENV`]
  if (nodeEnv === 'development') {
    chokidar.watch('./src/pages').on('change', (path) => {
      if (path.endsWith('tsx')) {
        console.log(
          `\n${pc.gray(dayjs().format('HH:mm:ss'))} ${pc.cyan(`http://localhost:${port}/`)} ${pc.green(
            'update success'
          )} `
        )
      }
    })
  }
};
