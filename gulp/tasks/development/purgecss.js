var gulp      	= require('gulp')
var purgecss  	= require('gulp-purgecss')
var cssPath   	= require('../../config').styles
var htmlPath  	= require('../../config').html
var outputPath  = require('../../config').developmentAssets

gulp.task('purgecss', () => {
  return gulp.src(cssPath.dest + '/*.css')
    .pipe(purgecss({
      content: [htmlPath.dest + '/**/*.html']
    }))
    .pipe(gulp.dest(cssPath.purgecss))
})
