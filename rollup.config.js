import lwc from "@lwc/rollup-plugin";
import replace from "@rollup/plugin-replace";

const env = process.env.NODE_ENV || "development";

export default {
  input: "src/index.js",
  output: {
    file: "public/bundle.js",
    format: "esm",
  },
  plugins: [lwc(), replace({ "process.env.NODE_ENV": JSON.stringify(env) })],
};
