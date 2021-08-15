const path = require('path')
const DotenvPlugin = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new DotenvPlugin({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
  ],
}
