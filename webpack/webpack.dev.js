const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new DotenvPlugin({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
}
