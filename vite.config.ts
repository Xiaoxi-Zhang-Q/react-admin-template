import type { ConfigEnv, UserConfig } from "vite";
import { defineConfig, loadEnv } from "vite";
import { createVitePlugin } from "/@x/build";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // process.env["VITE_APP_UPDATE_TIME"] = info.lastBuildTime;
  process.env["VITE_USER_NODE_ENV"] = mode;
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    plugins: createVitePlugin(env),
    server: {
      open: true,
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, '.')}/`,
        "/@/": `/${resolve(__dirname, "src")}/`,
        "/@x/": `/${resolve(__dirname, "library")}/`,
        "/@types/": `/${resolve(__dirname, "src/types")}/`,
      },
    },
  };
})
