const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const isProd = process.env.NODE_ENV === 'production'

const plugins = [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
        template: './src/template/index.html'
    })
];
module.exports = {
    mode: isProd ? "production" : "development",
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude:/node_modules/,

            }
        ]
    },
    devtool: isProd ? false : 'inline-source-map',
    devServer: {
        contentBase: "./dist",
        stats: "errors-only",
        compress: false,
        host: 'localhost',
        port: 8888,
    },
    plugins: plugins,

}