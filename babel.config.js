module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
     ["@babel/preset-typescript", {
      "rewriteImportExtensions": true
    }]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};