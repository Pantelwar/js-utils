/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  coverageDirectory: "<rootDir>/coverage",
};

module.exports = config;
