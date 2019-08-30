const gulp = require('gulp')
const stylelint = require('gulp-stylelint')
const config = require('../../config').csslint

if (!config) return

const csslintTask = () => {
  return gulp.src(config.src)
    .pipe(stylelint({
      config: {
        "rules": {
          "block-no-empty": null,
          "color-no-invalid-hex": true,
          "comment-empty-line-before": ["always", {
            "ignore": ["stylelint-commands", "after-comment"]
          }],
          "declaration-colon-space-after": "always",
          "indentation": ["tab", {
            "except": ["value"]
          }],
          "max-empty-lines": 2,
          "rule-empty-line-before": ["always", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
          }],
          // "unit-whitelist": ["px", "em", "rem", "%", "s"]
        }
      },
      reporters: [
        { formatter: 'verbose', console: true }
      ],
      fix: true,
      failAfterError: false
    }));
}

gulp.task('csslint', csslintTask)
module.exports = csslintTask
