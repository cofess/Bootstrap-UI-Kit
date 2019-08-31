// Html5 Cache Manifest
var gulp = require('gulp')
var manifest = require('gulp-manifest')
var config = require('../../config').manifest

if (!config) return

gulp.task('manifest', function() {
  gulp.src(config.src, { base: config.base })
    .pipe(manifest(config.options))
    .pipe(gulp.dest('build'));
});
