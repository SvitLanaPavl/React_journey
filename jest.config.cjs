// jest.config.cjs
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
  moduleNameMapper: {
    '\\.m?jsx?$': 'babel-jest',
  },
};
