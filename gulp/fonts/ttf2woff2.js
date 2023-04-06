const gulp = require("gulp");
const changed = require('gulp-changed');
const ttfToWoff2 = require('gulp-ttf2woff2');
const browserSync = require('browser-sync').create();
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function ttf2eot(cb) {
  return gulp.src("./src/fonts/*.ttf")
    .pipe(changed('./build/assets/fonts', {
      extension: '.woff2',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttfToWoff2())
    .pipe(gulp.dest('./build/assets/fonts'))
    .pipe(gulpIf(argv.development, browserSync.stream()));
  cb();
}
