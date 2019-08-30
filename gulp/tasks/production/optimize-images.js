const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const size = require('gulp-size')
const config = require('../../config').optimize.images

if (!config) return

/**
 * Copy and minimize image files
 */
const optimizeimagesTask = () => {
  return gulp.src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
}

gulp.task('optimize:images', optimizeimagesTask)
module.exports = optimizeimagesTask
