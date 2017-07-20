const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

var paths = {
    root: path.resolve(__dirname, ".."),
    src: path.resolve(__dirname, "..", "src"),
    css: path.resolve(__dirname, "..", "src", "css"),
    images: path.resolve(__dirname, "..", "src", "images"),
    app: path.resolve(__dirname, "..", "src", "app"),
    output: path.resolve(__dirname, "..", "wwwroot"),
    scripts: path.resolve(__dirname, "..", "wwwroot", "scripts")
};

console.log("Src: " + paths.src);
console.log("Out: " + paths.output);

module.exports = {
    entry: paths.app + "/index.tsx",

    output: {
        filename: "bundle.js",
        path: paths.scripts
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{ from: paths.css, to: path.resolve(paths.output, 'css') }]),
        new CopyWebpackPlugin([{ from: paths.images, to: path.resolve(paths.output, 'images') }]),
        new HtmlWebpackPlugin({
            template: path.resolve(paths.src, 'index.html'),
            output: path.resolve(paths.output, 'index.html')
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:3001/' })
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        host: '0.0.0.0',
        port: 3001,
        historyApiFallback: true,
        stats: 'minimal'
    }
};
