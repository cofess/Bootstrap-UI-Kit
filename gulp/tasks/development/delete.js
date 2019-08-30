const gulp = require('gulp');
const del = require('del');
const config = require('../../config').delete;

if (!config) return

/**
 * Delete folders and files
 */
const deleteTask = (callback) => {
  return del(config.src, callback);
}

gulp.task('delete', deleteTask)
module.exports = deleteTask
