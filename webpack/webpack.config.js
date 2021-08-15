const { merge } = require('webpack-merge')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const commonConfig = require('./webpack.common.js')

module.exports = (envVars) => {
  const { env, analyze } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  let config = merge(commonConfig, envConfig)
  if (analyze) {
    config.plugins = [...config.plugins, new BundleAnalyzerPlugin()]
  }
  return config
}
