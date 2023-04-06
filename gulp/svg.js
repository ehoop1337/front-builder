const gulp = require("gulp");
const svgmin = require('gulp-svgmin');
const browserSync = require('browser-sync').create();
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function svg(cb) {
  return gulp.src('./src/images/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./build/assets/images'))
    .pipe(gulpIf(argv.development, browserSync.stream()))
  cb();
};
