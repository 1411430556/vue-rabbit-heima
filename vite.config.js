import vitePluginsAutoI18n, { YoudaoTranslator } from 'vite-auto-i18n-plugin'
import { fileURLToPath, URL } from 'node:url'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// elementPlus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // 1. 配置elementPlus采用sass样式配色系统
        ElementPlusResolver({ importStyle: "sass" }),
      ],
    }),
    codeInspectorPlugin({
      bundler: 'vite',
    }),
    // vitePluginsAutoI18n({
    //   targetLangList: ['en'],
    //   translator: new YoudaoTranslator({
    //     appId: '6612167413defbe1',
    //     appKey: 'sxe5oBv5ovnE7xiFkNNRNfADjFEZLKie',
    //   }),
    // }),
  ],
  resolve: {
    // 实际的路径转换  @  -> src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 2. 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
      }
    }
  }
})
