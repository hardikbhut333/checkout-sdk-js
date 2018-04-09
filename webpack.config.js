const { DefinePlugin } = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: {
        'checkout-sdk': './src/index.ts',
    },

    output: {
        filename: '[name].js',
        library: "checkoutKit",
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },

    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
    ],
};
