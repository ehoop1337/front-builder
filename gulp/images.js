const gulp = require("gulp");
const webp = require('gulp-webp');
const browserSync = require('browser-sync').create();
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function images(cb) {
  return gulp.src('./src/images/**/*.+(png|jpg|jpeg|webp)')
    .pipe(webp())
    .pipe(gulp.dest('./build/assets/images'))
    .pipe(gulpIf(argv.development, browserSync.stream()));
  cb();
};
