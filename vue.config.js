const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


const copyFile = [
    {
        from: path.resolve("src/plugins/manifest.json"),
        to: `${path.resolve("dist")}/manifest.json`
    },
    {
        from: path.resolve("src/assets"),
        to: path.resolve("dist/assets")
    },
]

const plugins = [
    new CopyWebpackPlugin({
        patterns: copyFile
    }),
    AutoImport({
        resolvers: [ElementPlusResolver()],
    }),
    Components({
        resolvers: [ElementPlusResolver()],
    })
]

const pages = {}

pages["popup"] = {
    entry: `src/popup/main.js`,
    template: `src/popup/index.html`,
    filename: `popup.html`
}

module.exports = {
    pages,
    configureWebpack: {
        devtool: 'inline-source-map',
        plugins
    }
}