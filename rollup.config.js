import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import analyze from "rollup-plugin-analyzer";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
import visualizer from "rollup-plugin-visualizer";

export default {
  input: "./index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    analyze({
      hideDeps: true,
      summaryOnly: true,
    }),
    visualizer(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    commonjs(),
    peerDepsExternal(),
    resolve(),
    typescript(),
    postcss({
      extensions: [".css"],
    }),
    uglify(),
    babel(),
  ],
};
