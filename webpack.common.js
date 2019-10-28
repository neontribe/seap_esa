const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    plugins: [
        new CopyPlugin([
            {
                from: './node_modules/seap_core/src/images',
                to: 'images/[name].[ext]?[hash]',
                test: /\.(svg|png|jpg|ico)$/
            }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            _: 'underscore',
            Handlebars: 'handlebars'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|ico)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
                query: {
                    inlineRequires: '/node_modules/seap_core/src/images/',
                    helperDirs: path.join(__dirname, 'node_modules/seap_core/src/helpers'),
                    precompileOptions: {
                        knownHelpersOnly: false
                    }
                },
            }
        ]
    }
};