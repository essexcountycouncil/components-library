/* eslint-disable no-undef */ // Just for the moment
const webpack = require("webpack");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const config = {
    mode: isDevelopment ? "development" : "production",
    entry: "./lib/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: {
            root: "EccComponentLibrary",
            amd: "ecc-component-library",
            commonjs: "ecc-component-library",
        },
        libraryTarget: "umd",
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: require.resolve("babel-loader"),
                    options: {
                        // ... other options
                        plugins: [
                            // ... other plugins
                            isDevelopment &&
                                require.resolve("react-refresh/babel"),
                        ].filter(Boolean),
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            mimetype: "image/png",
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "lib")],
        extensions: [".js", ".jsx"],
    },
    externals: ["react", "react-dom"],
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "./lib/scss", to: "dist/scss" }],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
        }),
        new CleanWebpackPlugin(),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
};

module.exports = (env, argv) => {
    console.log(argv);

    if (argv.hot) {
        // Cannot use 'contenthash' when hot reloading is enabled.
        config.output.filename = "[name].[hash].js";
    }

    return config;
};
