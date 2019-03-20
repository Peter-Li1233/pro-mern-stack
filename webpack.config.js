const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/App.jsx'],
        vendor: ['react', 'react-dom', 'whatwg-fetch']
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
      },

    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        }
    },
    
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env']
                    }
                }
            },
        ]                      
    }
};