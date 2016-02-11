module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            { test: /\.html$/, loader: 'html' }
        ]
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'

};
