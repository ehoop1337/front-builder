const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    filename: 'scripts.js',
    assetModuleFilename: path.join('../images', '[name][ext]'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        include: [
          path.resolve(__dirname, "/src/js"),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader",
            options: {
              injectType: "linkTag",
              attributes: { type: "text/css" },
              insert: function insertAtTop(element) {
                var linkStyles = document.querySelectorAll("head > link");
                linkStyles[linkStyles.length - 1].before(element);
              },
            }
          },
          { loader: "file-loader", options: { name: '[name].[ext]', outputPath: '../css/libs' } },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
