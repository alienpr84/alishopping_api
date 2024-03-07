module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ["json", "lcov", "text", "clover"],
  testMatch: ["<rootDir>/__tests__/**/*.(test|spec).ts"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/index.ts",

  ],
  verbose: true,
}