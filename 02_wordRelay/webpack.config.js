const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};

// 2-5 웹팩 빌드하기
