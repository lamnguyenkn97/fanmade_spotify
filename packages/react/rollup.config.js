import Ts from 'rollup-plugin-typescript2'
import images from 'rollup-plugin-image-files';
import json from '@rollup/plugin-json';
export default {
    input: ['src/index.tsx'],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts(),images(), json()],
    preserveModules: true,
    external: ['react']
}