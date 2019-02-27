const path = (dir) => require("path").resolve(__dirname, dir);
const HTML = require("html-webpack-plugin");
const miniCSS = require("mini-css-extract-plugin");
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
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /.js$/,
                loader: "babel-loader"
            },
            {
                test: /.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                    //   data: `$subColor: green;`
                      data: `@import "./src/style/scss/_variables.scss";`
                    }
                  }
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
          "vue$": 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // new miniCSS({
        //     filename: "styles/main.css",
        // }),
        new HTML({
            template: "./src/index.html",
            title: "Cool",
            favicon: "./src/assets/favicon.ico"
        }),
        new VueLoaderPlugin(),
    ]
}
module.exports = baseConfig;