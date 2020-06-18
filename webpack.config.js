const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  node: {
    fs: "empty",
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  externals: {
    "@babel/core": "@babel/core"
  }
};
