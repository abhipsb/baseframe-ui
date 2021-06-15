import angular from 'rollup-plugin-angular';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default [{
  input: 'src/app/app.module.ts',
  output: {
    file: '../../main-app/src/assets/plugins/plugin2/plugin2.bundle.js',
    format: 'umd',
    name: 'plugin2',
  },
  plugins: [
    angular(),
    resolve({
      jsnext: true,
      main: true,
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    typescript({
      typescript: require('typescript')
    }),
    commonjs()
  ],
  external: [
    '@angular/core',
    '@angular/common'
  ]
}]