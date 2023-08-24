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

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default {
  define: {
    global: {},
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
    ],
  },
  optimizeDeps: {
    include: ['styled-components'], // styled-components 추가
  },
};
