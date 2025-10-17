// jest.config.cjs
/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.test.ts", "**/*.test.tsx", "**/*.test.js", "**/*.test.jsx"],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
