const gulp = require('gulp')
const webp = require('gulp-webp')
const config = require('../../config').webp

if (!config) return

/**
 * Convert images to WebP
 */
const webpTask = () => {
  return gulp.src(config.src)
    .pipe(webp(config.options))
    .pipe(gulp.dest(config.dest));
}

gulp.task('webp', webpTask)
module.exports = webpTask
