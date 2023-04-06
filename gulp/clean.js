const { src } = require('gulp');
const cleanGulp = require('gulp-clean');

module.exports = function clean(cb) {
  return src('build', {read: false, allowEmpty: true})
    .pipe(cleanGulp({force: true}))
  cb();
};
