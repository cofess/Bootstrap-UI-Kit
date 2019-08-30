const path = require('path')
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const size = require('gulp-size')
const rename = require('gulp-rename')
const config = require('../../config').js


if (!config) return

/**
 * Copy and minimize JS files
 */
const jsminTask = () => {
  return gulp.src([config.dest + '/*.js', '!' + config.dest + '/*.min.js'])
    .pipe(uglify(config.options.uglify))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
}

gulp.task('jsmin', jsminTask)
module.exports = jsminTask
