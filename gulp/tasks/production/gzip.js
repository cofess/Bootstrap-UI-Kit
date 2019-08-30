const gulp = require('gulp')
const tar = require('gulp-tar')
const gzip = require('gulp-gzip')
const size = require('gulp-size')
const config = require('../../config').gzip

if (!config) return

/**
 * Gzip text files
 */
const gzipTask = () => {
  return gulp.src(config.src)
    .pipe(tar(config.filename))
    .pipe(gzip(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
}

gulp.task('gzip', gzipTask)
module.exports = gzipTask
