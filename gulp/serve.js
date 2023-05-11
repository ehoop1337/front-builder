const { watch, series } = require('gulp');
const browserSync = require('browser-sync').create()
const styles = require('./styles');
const html = require('./html');
const javascript = require('./javascript');
const images = require('./images');
const svg = require('./svg');
const videos = require('./videos');
const fonts = require('./fonts');

module.exports = function serve(cb) {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    notify: false,
    open: true,
    cors: true
  })

  watch("src/styles/**/*.scss").on("change", series(styles, browserSync.reload));
  watch('src/images/**/*.{gif,png,jpg,jpeg,webp}').on("change", series(images, browserSync.reload));
  watch('src/images/**/*.{svg}').on("change", series(svg, browserSync.reload));
  watch('src/videos/**/*.{mp4}').on("change", series(videos, browserSync.reload));
  watch('src/fonts/**/*.{ttf,otf}').on("change", series(fonts, browserSync.reload));
  watch('src/js/**/*.js').on("change", series(javascript, browserSync.reload));
  watch('src/html/**/*.twig').on("change", series(html, browserSync.reload));

  return cb()
}
