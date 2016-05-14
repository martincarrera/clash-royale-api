var gulp = require('gulp')
var replace = require('gulp-replace')

// bump npm package version into package.js
gulp.task('meteor', function() {
  var pkg = require('./package.json')
  var versionRegex = /(version\:\s*\')([^\']+)\'/gi

  return gulp.src('package.js')
    .pipe(replace(versionRegex, '$1' + pkg.version + "'"))
    .pipe(gulp.dest('./'))
})
