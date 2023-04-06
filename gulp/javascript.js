const gulp = require("gulp");
const rename = require("gulp-rename");
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();
const webpackDevConfig = require('../webpack.config.dev.js');
const webpackProdConfig = require('../webpack.config.prod.js');
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function javascript(cb) {
  return gulp
    .src('./src/js/index.js')
    .pipe(
      gulpIf(argv.development, webpack(webpackDevConfig))
    )
    .pipe(
      gulpIf(argv.production, webpack(webpackProdConfig))
    )
    .pipe(gulp.dest('./build/assets/js'))
    .pipe(gulpIf(argv.development, browserSync.stream()));
  cb();
};
