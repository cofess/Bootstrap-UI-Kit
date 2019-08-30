const gulp = require('gulp')
const size = require('gulp-size')
const config = require('../../config').optimize.css

if (!config) return

/**
 * Copy CSS files
 */
const optimizecssTask = () => {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
}

gulp.task('optimize:css', optimizecssTask)
module.exports = optimizecssTask
