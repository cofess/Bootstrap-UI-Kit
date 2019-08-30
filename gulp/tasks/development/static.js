const path = require('path')
const gulp = require('gulp')
const changed = require('gulp-changed')
const config = require('../../config').static

if (!config) return

var staticTask = function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
}

gulp.task('static', staticTask)
module.exports = staticTask
