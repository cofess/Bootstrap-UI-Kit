"use strict";

var fs             = require('fs')
var path           = require('path')
var browserSync    = require('browser-sync')
var gulp           = require('gulp')
var data           = require('gulp-data')
var render         = require('gulp-nunjucks-render')
var config         = require('../../config').html

if (!config) return

var exclude = path.normalize('!**/{' + config.excludeFolders.join(',') + '}/**')

var getData = function(file) {
  var dataPath = path.resolve(config.src, config.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

var htmlProductionTask = function() {
  return gulp.src([config.src + '/**/*.{' + config.extensions + '}', exclude])
    .pipe(data(getData))
    .pipe(render({
      path: config.src,
      envOptions: {
        watch: false
      }
    }))
    .pipe(gulp.dest(config.production.dest))
    .on('end', browserSync.reload)
}

gulp.task('html:production', htmlProductionTask)
module.exports = htmlProductionTask
