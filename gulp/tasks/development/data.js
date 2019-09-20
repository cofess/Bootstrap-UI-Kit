"use strict";

var fs             = require('fs')
var path           = require('path')
var gulp           = require('gulp')
var data           = require('gulp-data')
var merge          = require('gulp-merge-json')
var config         = require('../../config').data

if (!config) return

gulp.task('data', function() {
  return gulp.src(config.src)
    .pipe(merge({
      fileName: 'data.json',
      edit: (json, file) => {
        // Extract the filename and strip the extension
        var filename = path.basename(file.path),
          primaryKey = filename.replace(path.extname(filename), '');

        // Set the filename as the primary key for our JSON data
        var data = {};
        data[primaryKey.substr(1).toLowerCase()] = json;

        return data;
      }
    }))
    .pipe(gulp.dest(config.dest));
});
