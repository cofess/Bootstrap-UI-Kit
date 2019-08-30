'use strict';

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const config = require('./gulp/config').watch;

/* load some files into the registry */
var hub = new HubRegistry([
  './gulp/tasks/**/*.js',
  '!' + './gulp/tasks/**/_*.js',
  '!' + './gulp/tasks/_*/*.js',
  './gulp/tasks/*.js',
  '!' + './gulp/tasks/_*.js'
]);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

/*************************************************************************
 * watch task
 * Start browsersync task and then watch files for changes
 *************************************************************************/
const watchTask = () => {
  // gulp.watch(config.jekyll,  gulp.series('jekyll-rebuild'));
  gulp.watch(config.styles, gulp.series('styles', 'csslint', 'cssmin'));
  gulp.watch(config.scripts, gulp.series('js', 'jsconcat', 'jshint', 'jsmin'));
  gulp.watch(config.images, gulp.series('images'));
  gulp.watch(config.fonts, gulp.series('fonts'));
  gulp.watch(config.static, gulp.series('static'));
  gulp.watch(config.sprites, gulp.series('sprites'));
  gulp.watch(config.html, gulp.series('html'));
}

gulp.task('watch', gulp.series('browsersync', watchTask));

/*************************************************************************
 * build task
 * Run all tasks needed for a build in defined order
 *************************************************************************/
const buildTask = (done) => {
  return gulp.series(
    'delete',
    gulp.parallel('static', 'fonts', 'styles', 'js', 'jsconcat', 'images', 'html'),
    gulp.parallel('cssmin', 'jsmin'),
    'base64'
  )(done);
};

gulp.task('build', buildTask);

/*************************************************************************
 * build task
 * Run all tasks needed for a build in defined order
 *************************************************************************/
const buildproductionTask = (done) => {
  gulp.series(
    'delete',
    'html:pro',
    gulp.parallel('styles', 'js', 'jsconcat', 'images'),
    'base64',
    gulp.parallel('optimize:css', 'optimize:js', 'optimize:images', 'optimize:html', 'fonts:pro'),
    'rev',
    'rev:collect',
    // 'webp', //有点小问题，依赖系统WIC图像处理组件
    'gzip'
  )(done);
};

gulp.task('build:pro', buildproductionTask);

/*************************************************************************
 * default task
 *************************************************************************/
gulp.task('default', gulp.series('build', 'watch'));
