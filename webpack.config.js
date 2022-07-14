const path = require('path')

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
    }
}