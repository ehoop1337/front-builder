const gulp = require("gulp");
const ttf = require('./fonts/ttf');
const ttf2eot = require('./fonts/ttf2eot');
const ttf2woff = require('./fonts/ttf2woff');
const ttf2woff2 = require('./fonts/ttf2woff2');
const ttf2svg = require('./fonts/ttf2svg')

module.exports = gulp.series(ttf, ttf2eot, ttf2woff, ttf2woff2, ttf2svg);

