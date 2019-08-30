const gulp = require('gulp')
const collect = require('gulp-rev-collector')
const config = require('../../config').collect

if (!config) return

/**
 * Replace all links to assets in files
 * from a manifest file
 */
const revcollectTask = () => {
  return gulp.src(config.src)
    .pipe(collect())
    .pipe(gulp.dest(config.dest));
}

gulp.task('rev:collect', revcollectTask)
module.exports = revcollectTask
