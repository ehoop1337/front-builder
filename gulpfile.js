const { series, parallel } = require('gulp');

const clean = require('./gulp/clean');
const serve = require('./gulp/serve');
const html = require('./gulp/html');
const styles = require('./gulp/styles');
const javascript = require('./gulp/javascript');
const images = require('./gulp/images');
const svg = require('./gulp/svg');
const fonts = require('./gulp/fonts');

exports.clean = series(clean);
exports.dev = series(clean, fonts, parallel(html, styles, javascript, images, svg), serve);
exports.build = series(clean, fonts, parallel(html, styles, javascript, images, svg));
