const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function fonts(cb) {
  return gulp.src("./src/fonts/*.ttf")
    .pipe(gulp.dest("./build/assets/fonts/"))
    .pipe(gulpIf(argv.development, browserSync.stream()))
  cb();
};
