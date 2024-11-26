const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js", // Указываем относительный путь
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // Это имя будет использоваться в index.html
  },
  devServer: {
    static: "./dist",
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Поддержка JavaScript и JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Расширения файлов
  },
};
