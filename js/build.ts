import { build } from "esbuild";
async function main() {
  const resultBrowser = await build({
    entryPoints: ["src/browser.ts"],
    bundle: true,
    outfile: "dist/esbuild/browser.js",
    sourcemap: "both",
    minify: true,
    platform: "browser",
    format: "cjs",
    target: "es6",
  });
  console.log("resultBrowser", resultBrowser);

  const resultNode = await build({
    entryPoints: ["src/node.ts"],
    bundle: true,
    outfile: "dist/esbuild/node.js",
    sourcemap: "both",
    minify: true,
    platform: "node",
    format: "cjs",
    target: "es6",
  });
  console.log("resultNode", resultNode);
}
main();
