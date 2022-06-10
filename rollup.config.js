import esbuild from 'rollup-plugin-esbuild';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input:'./src/index.ts',
  output:{
    file:'./dist/bundle.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    esbuild({
      target: 'es2017',
      treeShaking: true,
      minify: false,
    }),
    livereload(),
    serve({
      open: true,
      openPage:'/demo/index.html',
      contentBase: '',
      port:8080,
    })
  ]
}
