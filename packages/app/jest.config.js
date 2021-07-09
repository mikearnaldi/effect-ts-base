// eslint-disable-next-line
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["./src/**/*.ts"],
  modulePathIgnorePatterns: ["<rootDir>/lib"],
  setupFilesAfterEnv: ["<rootDir>/../../scripts/jest-after-env.ts"],
  verbose: true,
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
};
