var config       = require('../config').fonts;
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest));
});