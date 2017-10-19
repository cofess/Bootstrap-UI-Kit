var path            = require('path')
var folders         = require('gulp-recursive-folder')
var gulp            = require('gulp')
var concat          = require('gulp-concat')
var sourcemap       = require('gulp-sourcemaps')
var gulpif          = require('gulp-if')
var config          = require('../../config').js


if (!config) return

gulp.task('jsconcat', folders({
  base: config.concat.folder,
  exclude: config.concat.excludeFolders,
}, function(folder) {
  //This will loop over all folders inside pathToFolder main and recursively on the children folders, secondary 
  //With folder.name gets the folderName 
  //With folder.path gets all folder path found 
  //With folder.pathTarget gets the relative path beginning from options.pathFolder 
  return gulp.src([
      folder.path + "/**/*.js",
      "!" + folder.path + "/_*/**",
      "!" + folder.path + "/**/_*.js"
    ])
    .pipe(gulpif(config.sourcemap,sourcemap.init()))
    .pipe(concat(folder.name + ".js"))
    .pipe(gulpif(config.sourcemap && '!*min.js',sourcemap.write('./')))
    .pipe(gulp.dest(config.concat.dest));
}));
