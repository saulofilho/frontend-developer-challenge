module.exports = {
    entry: ["@babel/polyfill", "./src/script/main.js"],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: __dirname + "/public",
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },
};