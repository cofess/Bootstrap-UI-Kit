const gulp = require('gulp')
const uglify = require('gulp-uglify')
const size = require('gulp-size')
const config = require('../../config').optimize.js


if (!config) return

/**
 * Copy and minimize JS files
 */
const optimizejsTask = () => {
  return gulp.src(config.src)
    .pipe(uglify(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
}

gulp.task('optimize:js', optimizejsTask)
module.exports = optimizejsTask
