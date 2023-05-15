const { watch, series } = require('gulp');
const browserSync = require('browser-sync');
const styles = require('./styles');
const html = require('./html');
const javascript = require('./javascript');
const images = require('./images');
const svg = require('./svg');
const videos = require('./videos');
const fonts = require('./fonts');

const bs = browserSync.create();

module.exports = {
  serve(cb) {
    bs.init({
      server: {
        baseDir: 'build'
      },
      watch: ["change", "add"],
      notify: true,
      open: true,
      cors: true
    })

    return cb();
  },
  watch(cb) {
    // Change
    watch("src/styles/**/*.scss").on("change", series(styles, bs.reload));
    watch('src/images/**/*.{gif, png, jpg, jpeg, webp}').on("change", series(images, bs.reload));
    watch('src/images/**/*.svg').on("change", series(svg, bs.reload));
    watch('src/videos/**/*.mp4').on("change", series(videos, bs.reload));
    watch('src/fonts/**/*.{ttf, otf}').on("change", series(fonts, bs.reload));
    watch('src/js/**/*.js').on("change", series(javascript, bs.reload));
    watch('src/html/**/*.twig').on("change", series(html, bs.reload));

    // Add
    watch('src/fonts/**/*.{ttf, otf}').on("add", series(fonts, bs.reload));
    watch('src/images/**/*.{gif, png, jpg, jpeg, webp}').on("add", series(images, bs.reload));
    watch('src/images/**/*.svg').on("add", series(svg, bs.reload));
    watch('src/videos/**/*.mp4').on("add", series(videos, bs.reload));

    return cb();
  }
}
