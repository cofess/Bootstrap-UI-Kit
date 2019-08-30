const path = require('path')
const gulp = require('gulp')
const minify = require('gulp-clean-css')
const plumber = require('gulp-plumber')
  // const sourcemap      = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const browsersync = require('browser-sync')
  // const autoprefixer   = require('autoprefixer')
const size = require('gulp-size')
const rename = require('gulp-rename')
const config = require('../../config').styles

if (!config) return

function onError(err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

const cssminTask = () => {
  browsersync.notify('Transforming CSS with CSS Minify');

  return gulp.src([config.dest + '/*.css', '!' + config.dest + '/*.min.css'])
    .pipe(plumber({
      errorHandler: onError
    }))
    // .pipe(sourcemap.init())
    .pipe(minify(config.options.minify))
    // .pipe(sourcemap.write('.'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest))
    .pipe(size())
}

gulp.task('cssmin', cssminTask)
module.exports = cssminTask
