import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';


export default (({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  const lessonName = process.env.LESSON_NAME;

  return defineConfig({
    root: mode === 'development' ? 'src' : process.cwd(),
    build: {
      rollupOptions: {
        input: {
          practice: resolve(__dirname, 'src/practice/practice.html'),
          puzzle: resolve(__dirname, 'src/puzzle/puzzle.html'),
        },
        output: {
          assetFileNames: 'src/[name]/[ext]/[name].[ext]',
        }
      },
      polyfillModulePreload: false,
    },
    server: {
      open: `/${lessonName}/${lessonName}.html`,
    },
  });
});