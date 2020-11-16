import path from "path";
import babel from "rollup-plugin-babel";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.browser,
      format: "umd",
      name: "umd",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    resolve(),
    terser(),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        "react-dom": ["createPortal", "findDOMNode"],
      },
    }),
    alias({
      entries: [
        {
          find: "@__mocks__",
          replacement: path.resolve(__dirname, "src/__mocks__"),
        },
        {
          find: "@__test__",
          replacement: path.resolve(__dirname, "src/__test__"),
        },
        { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/components"),
        },
        { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
        {
          find: "@utils",
          replacement: path.resolve(__dirname, "src/utils"),
        },
      ],
    }),
  ],
  external: ["styled-components", "react"],
};
