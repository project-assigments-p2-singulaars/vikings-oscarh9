import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    // passWithNoTests: true,
  },
  plugins: [tsconfigPaths()],
});
