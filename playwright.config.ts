import { loadEnvConfig } from "@next/env";
import { defineConfig } from "@playwright/test";

// Make .env values available to the test process so the Prisma client used
// for end-to-end DB assertions can connect using DATABASE_URL.
loadEnvConfig(process.cwd());

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
    headless: true,
  },
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
