const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const yargs = require('yargs/yargs');
const gulpIf = require('gulp-if');

const { hideBin } = require('yargs/helpers')
const replace = require("gulp-replace");
const argv = yargs(hideBin(process.argv)).argv

module.exports = function styles(cb) {
  return src('src/styles/index.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename({
      basename: "styles",
    }))
    .pipe(replace(/@img\//g, '../images/'))
    .pipe(replace(/\.(jpg|jpeg|png)"/g, '.webp"'))
    .pipe(gulpIf(argv.production, autoprefixer({
      cascade: false
    })))
    .pipe(gulpIf(argv.production, cssnano()))
    .pipe(dest('build/assets/css'))
    .pipe(gulpIf(argv.development, browserSync.stream()))
  cb();
};
