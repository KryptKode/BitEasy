module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    root: "./",
                    extensions: [
                        ".ios.ts",
                        ".android.ts",
                        ".ts",
                        ".tsx",
                        ".jsx",
                        ".js",
                        ".json",
                    ],
                    alias: {
                        "@src": "./src",
                        "@assets": "./assets",
                    },
                },
            ],
        ],
    };
};
