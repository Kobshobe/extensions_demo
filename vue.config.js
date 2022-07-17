const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const resolve = (dir) => path.resolve(__dirname, dir)

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

pages["options"] = {
    entry: `src/popup/main.js`,
    template: `src/options/index.html`,
    filename: `options.html`
}

module.exports = {
    pages,
    configureWebpack: {
        devtool: 'inline-source-map',
        plugins,
        entry: {
            content_some_id_xxxxx: "./src/content/main.js",
            background: "./src/plugins/background.js"
        },
        output: {
            path: resolve('dist'),
            filename: '[name].js'
        },
    },
    css: {
        extract: {
          filename: "css/[name]_some_id_xxxxx.css",
          chunkFilename: "css/[name]_some_id_xxxxx.css"
        }
      },
    chainWebpack: config => {
        config.output.filename('[name]_some_id_xxxxx.js').end()
        config.output.chunkFilename('[name]_some_id_xxxxx.js').end()
    }
}