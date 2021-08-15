const path = require('path')
const DotenvPlugin = require('dotenv-webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new DotenvPlugin({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
}
