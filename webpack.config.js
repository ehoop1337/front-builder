const path = require('path');

module.exports = {
  production: {
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
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
      ],
    },
  },
  development: {
    mode: 'development',
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
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
      ],
    },
  },
};
