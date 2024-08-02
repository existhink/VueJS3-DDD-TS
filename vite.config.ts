import { fileURLToPath } from 'node:url';

// Path
import path from 'path';

// Vite
import { defineConfig } from 'vite';

// Vite Plugins
import vue from '@vitejs/plugin-vue';

/**
 * @description Vite plugin to automatically import files from a directory.
 * @see https://github.com/antfu/unplugin-auto-import
 */
import AutoImport from 'unplugin-auto-import/vite';

/**
 * @description Vite plugin to minify svg files
 * @see https://github.com/vbenjs/vite-plugin-svg-icons
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

/**
 * @description Vite plugin to automatically import components from a directory.
 * @see https://github.com/unplugin/unplugin-vue-components
 *
 * @note We should know, if we can't use the dynamic component registration with the Vite plugin. So we need to register the components manually. Please check out this issue: https://github.com/unplugin/unplugin-vue-components/issues/643
 */
import Components from 'unplugin-vue-components/vite';

/**
 * @description Vite plugin to minify images using imagemin.
 * @see https://github.com/unplugin/unplugin-imagemin
 */
import imagemin from 'unplugin-imagemin/vite';

/**
 * @description Vite plugin to remove console.log and other console.* calls from your code.
 * @see https://github.com/xiaoxian521/vite-plugin-remove-console
 */
import removeConsole from 'vite-plugin-remove-console';

/**
 * @description Vite plugin to compress the build output using vite-plugin-compression.
 * @see https://github.com/vbenjs/vite-plugin-compression
 */
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/app/composables', 'src/app/constants', 'src/app/helpers'],
      eslintrc: {
        enabled: true, // <-- this
      },
      imports: ['vue', 'vue-router'],
      vueTemplate: true,
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/app/assets/icons')],

      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    Components({
      directoryAsNamespace: true,

      // relative paths to the directory to search for components.
      dirs: ['src/app/components'],

      // generate `components.d.ts` global declarations,
      // also accepts a path for custom filename
      // default: `true` if package typescript is installed
      dts: 'src/components.d.ts',

      exclude: ['src/app/components/layouts/**'],
      extensions: ['vue'],

      globalNamespaces: ['global'],

      // Glob patterns to match file names to be detected as components.
      // When specified, the `dirs` and `extensions` options will be ignored.
      // If you want to exclude components being registered, use negative globs with leading `!`.
      globs: ['src/app/components/**/*.{vue}'],

      include: [/\.vue($|\?)/, /\.md($|\?)/],

      resolvers: [
        // Element-plus resolver
        componentName => {
          // ? We need to check, if the component name is includes AppBase prefix. So we can resolve it to the correct path to the component (src/app/components/base)
          if (componentName.startsWith('AppBase')) {
            return path.resolve(__dirname, `src/app/components/base/${componentName}.vue`);
          }
        },
      ],

      // Only provide types of components in library (registered globally)
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
    imagemin({
      // Default mode sharp. support squoosh and sharp
      mode: 'squoosh',
      beforeBundle: true,
      // Default configuration options for compressing different pictures
      compress: {
        jpg: {
          quality: 10,
        },
        jpeg: {
          quality: 10,
        },
        png: {
          quality: 10,
        },
        webp: {
          quality: 10,
        },
      },
      conversion: [
        { from: 'jpeg', to: 'webp' },
        { from: 'png', to: 'webp' },
        { from: 'JPG', to: 'jpeg' },
      ],
    }),
    removeConsole(),
    viteCompression(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/app/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/app/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/app/composables', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/app/constants', import.meta.url)),
    },
  },
});
