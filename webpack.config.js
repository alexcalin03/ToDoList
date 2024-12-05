const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Your main JavaScript file
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Clean the output directory before each build
    },
    mode: 'development', // Set mode to development or production
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Directory to serve files from
        },
        port: 8080, // Port for the dev server
        open: true, // Automatically open the browser
        hot: true,  // Enable Hot Module Replacement
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your template file
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Load and inject CSS
            },
        ],
    },
};
