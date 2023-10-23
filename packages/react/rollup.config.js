import Ts from 'rollup-plugin-typescript2'


export default {
    input: ['src/index.tsx', 'src/atoms/Button/index.tsx'],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts()],
    preserveModules: true,
    external: ['react']
}