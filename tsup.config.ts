import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  target: 'esnext',
  dts: true,
  format: ['cjs', 'esm'],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  sourcemap: true,
  clean: true,
})
