const gulp = require('gulp')
const jshint = require('gulp-jshint')
const stylish = require('jshint-stylish')
const config = require('../../config').jshint

if (!config) return

/**
 * Check JavaScript sytax with JSHint
 */
const jshintTask = () => {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish, { beep: true }));
}

gulp.task('jshint', jshintTask)
module.exports = jshintTask
