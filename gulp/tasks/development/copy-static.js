var gulp           = require('gulp')
var changed        = require('gulp-changed')
var config         = require('../../config').static

if (!config) return

var staticTask = function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
}

gulp.task('copy:static', staticTask)
module.exports = staticTask
