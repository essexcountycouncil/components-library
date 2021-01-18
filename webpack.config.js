/* eslint-disable no-undef */ // Just for the moment
const webpack = require("webpack");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

/**
 * Main Webpack Config
 * Responsible for cleaning the dist folder, building our react code, copying scss folder + images and generating a report on bundle
 * @returns {Object} WebpackConfig
 */
const main = {
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
    stats: {
        assets: false,
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
            patterns: [
                {
                    from: "./lib/scss",
                    to: "./scss",
                },
                {
                    from: "./lib/images",
                    to: "./images",
                },
            ],
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

/**
 * cssBuild
 * Responsible for just building our scss into a static css file
 * @returns {Object} WebpackConfig
 */
const cssBuild = () => {
    const baseScss = require.resolve("./lib/scss/styles.scss");
    const loaders = [
        {
            loader: "file-loader",
            options: {
                name: "css/[name].css",
            },
        },
        "extract-loader",
        "css-loader?-url",
        "sass-loader",
    ];

    return {
        entry: baseScss,
        output: {
            filename: "css/extra.js",
        },
        module: {
            rules: [
                {
                    test: baseScss,
                    loaders,
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
        plugins: [new FixStyleOnlyEntriesPlugin()],
    };
};

module.exports = (env, argv) => {
    if (argv.hot) {
        // Cannot use 'contenthash' when hot reloading is enabled.
        main.output.filename = "[name].[hash].js";
    }

    if (isDevelopment) {
        return main;
    }

    return [main, cssBuild()];
};
