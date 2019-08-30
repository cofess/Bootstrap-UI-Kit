const gulp = require('gulp')
const bs = require('browser-sync')
const config = require('../../config').browsersync.production

/**
 * Start a server and watch changes with BrowserSync
 */
const browsersyncproductionTask = () => {
  return bs.init(config);
}

// gulp.task('browsersync:pro', gulp.series('build:pro', browsersyncproductionTask))
gulp.task('browsersync:pro', browsersyncproductionTask)
module.exports = browsersyncproductionTask
