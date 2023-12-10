import Ts from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import image from 'rollup-plugin-image';

export default {
    input: ['src/index.tsx'],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts()],
    preserveModules: true,
    external: ['react']
}