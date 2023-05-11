const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function vidoes(cb) {
  return gulp.src('./src/videos/**/*.+(mp4)')
    .pipe(gulp.dest('./build/assets/videos'))
    .pipe(gulpIf(argv.development, browserSync.stream()));
  cb();
};
