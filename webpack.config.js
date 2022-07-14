const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const resolve = (dir) => path.resolve(__dirname, dir)

let mode = "development"

module.exports = {
    mode,
    devtool: 'inline-source-map',
    entry: {
        background: "./src/plugins/background.js"
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ],
}