const path = (dir) => require("path").resolve(__dirname, dir);
const miniCSS = require("mini-css-extract-plugin");
const HTML = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const baseConfig = {
    entry: "./src/index.js",
    output: {
        filename: "js/main.js",
        path: path('public'),
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.vue/,
                loader: 'vue-loader',
                options: {
                    esModule: false,
                }
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    miniCSS.loader,
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: 'images/favicon/favicon.[ext]',
                },
            },
        ]
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new miniCSS({
            filename: "styles/main.css",
        }),
        new HTML({
            template: "./src/index.html",
            title: "Cool",
            favicon: "./src/assets/favicon.ico"
        }),
        new VueLoaderPlugin(),
    ]
}
module.exports = baseConfig;