const gulp = require("gulp");
const changed = require('gulp-changed');
const ttfToSvg = require('gulp-ttf-svg');
const browserSync = require('browser-sync').create();
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function ttf2eot(cb) {
  return gulp.src("./src/fonts/*.ttf")
    .pipe(changed('./build/assets/fonts', {
      extension: '.svg',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttfToSvg())
    .pipe(gulp.dest('./build/assets/fonts'))
    .pipe(gulpIf(argv.development, browserSync.stream()));
  cb();
}
