import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginsHookTest from "./src/plugins/vite-plugins-hook-test";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginsHookTest()],
});
