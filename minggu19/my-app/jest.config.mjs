import { TestEnvironment } from "jest-environment-jsdom";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvidwer: "v8",
  TestEnvironment: "jsdom",
};

export default createJestConfig(config);
