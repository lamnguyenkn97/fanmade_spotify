import Ts from 'rollup-plugin-typescript2'
import images from 'rollup-plugin-image-files';
export default {
    input: ['src/index.tsx'],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts(),images()],
    preserveModules: true,
    external: ['react']
}