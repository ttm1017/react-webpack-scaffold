const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        publicPath: "/assets/"
    },
    module: {
        loaders: [{
            test: /\.jsx?|.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/, // Only .css files
            loader: 'style-loader!css-loader' // Run both loaders
        },{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        },{
            test: /\.(jpe?g|png|gif|svg)$/,
            loaders: [
                'file-loader?name=[name].[ext]&publicPath=assets/&outputPath=images/',
                'image-webpack-loader?bypassOnDebug'
            ]
        }]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: ["./build", "./"],
        inline: true
    }
};