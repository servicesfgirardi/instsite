import { defineConfig } from "@tanstack/react-start/config";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tsConfigPaths from "vite-tsconfig-paths";

const isNetlify = !!process.env.NETLIFY;

export default defineConfig({
  plugins: [
    ...(isNetlify ? [netlify()] : []),
    tsConfigPaths(),
  ],
  tanstackStart: {
    server: { entry: "server" },
  },
});
