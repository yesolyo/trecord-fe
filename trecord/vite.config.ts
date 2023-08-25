// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr';
// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     global: {},
//   },
//   plugins: [react(), svgr()],
//   resolve: {
//     alias: [
//       { find: '@components', replacement: '/src/components' },
//       { find: '@', replacement: '/src' },
//     ],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';

export default defineConfig({
  // define: {
  //   global: {},
  // },

  plugins: [react(), svgr(), dts()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
    ],
  },
  optimizeDeps: {
    include: ['styled-components'], // styled-components 추가
  },
});
