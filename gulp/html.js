const gulp = require("gulp");
const twig = require('gulp-twig');
const replace = require('gulp-replace');
const prettyHtml = require('gulp-pretty-html');
const browserSync = require('browser-sync').create();
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

module.exports = function html(cb) {
    return gulp.src('./src/html/*.twig')
      .pipe(twig({
        data: {
          title: 'Title page',
        }
      }))
      .pipe(gulpIf(argv.development, replace(/@img\//g, 'assets/images/')))
      .pipe(gulpIf(argv.production, replace(/@img\//g, '/assets/images/')))
      .pipe(replace(/\.(jpg|jpeg|png)"/g, '.webp"'))
      .pipe(prettyHtml({indent_size: 4}))
      .pipe(gulp.dest('./build/'))
      .pipe(gulpIf(argv.development, browserSync.stream()));
  cb();
};
