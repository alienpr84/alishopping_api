module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
};