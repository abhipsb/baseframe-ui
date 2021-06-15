import angular from 'rollup-plugin-angular';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default [{
   input: 'src/main.ts',
   output: {
     file: '../../main-app/src/assets/plugins/plugin1/plugin1.bundle.js',   
     format: 'umd',
     name: 'plugin1',
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