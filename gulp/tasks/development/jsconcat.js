const path = require('path')
const folders = require('gulp-recursive-folder')
const gulp = require('gulp')
const concat = require('gulp-concat')
const sourcemap = require('gulp-sourcemaps')
const gulpif = require('gulp-if')
const config = require('../../config').js


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
    .pipe(gulpif(config.sourcemap, sourcemap.init()))
    .pipe(concat(folder.name + ".js"))
    .pipe(gulpif(config.sourcemap && '!*min.js', sourcemap.write('./')))
    .pipe(gulp.dest(config.concat.dest));
}));
