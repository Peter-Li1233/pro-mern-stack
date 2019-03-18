const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/App.jsx',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'app.bundle.js'
    },

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