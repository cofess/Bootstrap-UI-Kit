var gulp         = require('gulp')
var less         = require('gulp-less')
var sass         = require('gulp-sass')
var cleancss     = require('gulp-clean-css')
var plumber      = require('gulp-plumber')
var sourcemap    = require('gulp-sourcemaps')
var gutil        = require('gulp-util')
var browsersync  = require('browser-sync')
var autoprefixer = require('gulp-autoprefixer')
var gulpif       = require('gulp-if')
var gcmq         = require('gulp-group-css-media-queries')
var rename       = require('gulp-rename')
var config       = require('../../config').styles

if (!config) return

function onError(err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

gulp.task('styles', function() {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulpif(config.sourcemap,sourcemap.init()))
    // .pipe(sass(config.compile))
    .pipe(gulpif(config.type == 'less',less(config.less.compile)))
    .pipe(gulpif(config.type == 'sass',sass(config.sass.compile)))
    .pipe(autoprefixer(config.options.autoprefixer))
    .pipe(cleancss(config.options.clean))
    .pipe(gcmq())
    .pipe(gulpif(config.sourcemap,sourcemap.write('.')))
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest(config.dest));
});
