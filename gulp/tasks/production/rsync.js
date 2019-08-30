const gulp = require('gulp')
const rsync = require('gulp-rsync')
const config = require('../../config').rsync

if (!config) return

/**
 * Copy files and folder to server
 * via rsync
 */
const rsyncTask = () => {
  return gulp.src(config.src)
    .pipe(rsync(config.options));
}

gulp.task('rsync', rsyncTask)
module.exports = rsyncTask
