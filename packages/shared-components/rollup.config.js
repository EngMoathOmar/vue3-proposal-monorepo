import typescript from "@rollup/plugin-typescript"
import vue from "rollup-plugin-vue"
import postcss from "rollup-plugin-postcss"
import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"

export default {
  input: `components/${process.env.component}/index.ts`,
  output: {
    file: `dist/${process.env.component}/component.js`,
    format: "esm",
    sourcemap: true,
  },
  external: "vue",
  plugins: [
    typescript(),
    vue(),
    postcss({ extract: "styles.css", minimize: true }),
    babel({ babelHelpers: "bundled", extensions: [".ts", ".tsx", ".vue"] }),
    terser(),
  ],
}
