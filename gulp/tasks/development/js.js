const path = require('path')
const gulp = require('gulp')
const sourcemap = require('gulp-sourcemaps')
const browsersync = require('browser-sync')
const rename = require('gulp-rename')
const gulpif = require('gulp-if')
const config = require('../../config').js


if (!config) return

/**
 * Copy and minimize JS files
 */
const jsTask = () => {
  browsersync.notify('Compiling JavaScript');
  return gulp.src(config.src)
    .pipe(gulpif(config.sourcemap && '!*min.js', sourcemap.init()))
    .pipe(gulpif(config.sourcemap && '!*min.js', sourcemap.write('./')))
    .pipe(gulp.dest(config.dest));
}

gulp.task('js', jsTask)
module.exports = jsTask
