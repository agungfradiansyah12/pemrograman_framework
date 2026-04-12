import { TestEnvironment } from "jest-environment-jsdom";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectConverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "**/*.d.ts", "!**/node_modules/**", "!**/.next/**", "!**/coverage/**", "!**/jest.config.mjs", "!**/next.config.mjs", "!**/types/**", "!**/views/**", "!**/page/api**"],
};

export default createJestConfig(config);
