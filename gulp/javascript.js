const gulp = require("gulp");
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();
const webpackConfig = require('../webpack.config.js');
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function javascript(cb) {
  return gulp
    .src('./src/js/index.js')
    .pipe(
      gulpIf(argv.development, webpack(webpackConfig.development))
    )
    .pipe(
      gulpIf(argv.production, webpack(webpackConfig.production))
    )
    .pipe(gulp.dest('./build/assets/js'))
    .pipe(gulpIf(argv.development, browserSync.stream()));
  cb();
};
