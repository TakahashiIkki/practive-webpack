module.exports = {
    mode: "development",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.tsx",

    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "main.js"
    },

    module: {
        rules: [
            {
                // 拡張子 .ts もしくは .tsx の場合
                test: /\.tsx?$/,
                // TypeScriptをコンパイル
                use: "ts-loader"
            }
        ]
    },
    // import文で .ts や .tsx ファイルを解決する
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};