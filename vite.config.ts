import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor";

// see https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    themePreprocessorPlugin({
      // 使用Less
      less: {
        // 此处配置自己的主题文件
        multipleScopeVars: [
          {
            scopeName: "theme-default",
            path: path.resolve("src/config/theme/default.less"),
          },
          {
            scopeName: "theme-light",
            path: path.resolve("src/config/theme/light.less"),
          },
        ],
        defaultScopeName: "theme-default", // 默认取 multipleScopeVars[0].scopeName
        extract: false,// 在生产模式是否抽取独立的主题css文件
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: path.join(__dirname, './src/')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  },
  server: {
    open: true,
  }
});
