// Html5 Cache Manifest
const gulp = require('gulp')
const manifest = require('gulp-manifest')
const config = require('../../config').manifest

if (!config) return

const manifestTask = () => {
  return gulp.src(config.src, { base: config.base })
    .pipe(manifest(config.options))
    .pipe(gulp.dest('build'));
}

gulp.task('manifest', manifestTask)
module.exports = manifestTask
