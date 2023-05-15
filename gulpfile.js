const { series, parallel } = require('gulp');

const clean = require('./gulp/clean');
const bs = require('./gulp/serve');
const html = require('./gulp/html');
const styles = require('./gulp/styles');
const javascript = require('./gulp/javascript');
const images = require('./gulp/images');
const svg = require('./gulp/svg');
const fonts = require('./gulp/fonts');
const videos = require('./gulp/videos');

exports.clean = series(clean);
exports.dev = series(clean, fonts, parallel(html, styles, javascript, images, svg, videos), series(bs.serve, bs.watch));
exports.build = series(clean, fonts, parallel(html, styles, javascript, images, svg, videos));
