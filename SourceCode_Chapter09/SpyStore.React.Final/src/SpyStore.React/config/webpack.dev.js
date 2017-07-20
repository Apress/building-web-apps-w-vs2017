const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

var paths = {
    root: path.resolve(__dirname, ".."),
    src: path.resolve(__dirname, "..", "src"),
    css: path.resolve(__dirname, "..", "src", "css"),
    images: path.resolve(__dirname, "..", "src", "images"),
    app: path.resolve(__dirname, "..", "src", "app"),
    output: path.resolve(__dirname, "..", "wwwroot")
};

console.log("Src: " + paths.src);
console.log("Out: " + paths.output);

module.exports = {
    entry: paths.app + "/index.tsx",

    output: {
        filename: "/scripts/bundle.js",
        path: paths.output
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{ from: paths.css, to: path.resolve(paths.output, 'css') }]),
        new CopyWebpackPlugin([{ from: paths.images, to: path.resolve(paths.output, 'images') }]),
        new HtmlWebpackPlugin({
            template: path.resolve(paths.src, 'index.html'),
            output: path.resolve(paths.output, 'index.html')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:3001/' })
    ],

    devServer: {
        host: '0.0.0.0',
        port: 3001,
        historyApiFallback: true,
        outputPath: paths.output,
        stats: 'minimal'
    }
};
