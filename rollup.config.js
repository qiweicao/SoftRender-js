import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input:'./src/index.js',
  output:{
    file:'./dist/bundle.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    livereload(),
    serve({
      open: true,
      openPage:'/demo/index.html',
      contentBase: ''
    })
  ]
}
