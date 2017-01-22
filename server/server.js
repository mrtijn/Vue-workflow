const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../webpack.config.js')
const compiler = webpack(config)
module.exports = (PORT) => {
  const server = new WebpackDevServer(compiler, {
    // contentBase: './server',
    publicPath: 'http://localhost:9000/assets/js',
    inline: true,
    hot: true,
    stats: { colors: true }
  })

  server.listen(PORT, 'localhost', function () {
    console.log(`WebpackDevServer running on port ${PORT}`)
  })
}
