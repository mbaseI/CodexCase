module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
      "\\.[jt]sx?$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
};