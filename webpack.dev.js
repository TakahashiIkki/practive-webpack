module.exports = {
    mode: "development",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.ts",

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScriptをコンパイル
                use: "ts-loader"
            }
        ]
    },
    // import文で .ts ファイルを解決する
    resolve: {
        extensions: [".ts"]
    }
};