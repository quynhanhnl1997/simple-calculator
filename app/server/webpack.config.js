const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [path.resolve(path.join(__dirname, './src/server.js'))],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'server.bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    target: 'node', // Ignore built-in modules
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}